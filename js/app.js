/**
 * app.js — state、render、drag & drop 邏輯
 * render 與 dnd 緊耦合（互相呼叫），故合為一個模組避免循環 import。
 */
import { CATEGORIES, BLOCKS, getBlock } from './registry.js';

const MAX_CANVASES  = 10;
const STORAGE_KEY   = 'drag-template-state';

// ── State ────────────────────────────────────────────────────
export const state = {
  selectedCategory:    'header',
  canvases:            { 'page-1': { label: '頁面 1', blocks: [] } },
  activeCanvas:        'page-1',
  _canvasSeq:          1,
  dragSource:          null,
  dragOverIndex:       null,
  selectedCanvasBlock: null,
};

let uidCounter = 0;
const genUid = () => `b${++uidCounter}`;

// ── Persistence ──────────────────────────────────────────────
export function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      canvases:    state.canvases,
      activeCanvas: state.activeCanvas,
      _canvasSeq:  state._canvasSeq,
      uidCounter,
    }));
  } catch (_) { /* 隱私模式或容量已滿，靜默忽略 */ }
}

export function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    const saved = JSON.parse(raw);
    if (saved.canvases && Object.keys(saved.canvases).length > 0) {
      state.canvases = saved.canvases;
    }
    if (saved.activeCanvas && state.canvases[saved.activeCanvas]) {
      state.activeCanvas = saved.activeCanvas;
    }
    if (saved._canvasSeq) state._canvasSeq = saved._canvasSeq;
    if (saved.uidCounter)  uidCounter       = saved.uidCounter;
    // 確保舊版存檔的 canvas 也有 locked 屬性
    Object.values(state.canvases).forEach(cv => {
      if (cv.locked === undefined) cv.locked = false;
    });
  } catch (_) { /* 資料損壞，使用預設值 */ }
}

function getActiveBlocks() {
  return state.canvases[state.activeCanvas].blocks;
}

// ── Toast ────────────────────────────────────────────────────
export function showToast(msg, icon = '✓') {
  const t = document.getElementById('toast');
  t.innerHTML = `<span>${icon}</span> ${msg}`;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2200);
}

// ── Thumbnail（真實區塊縮放預覽）─────────────────────────────
function buildThumb(block) {
  return `<div class="block-thumb-inner">${block.html}</div>`;
}

// cover 縮放：高度撐滿縮圖框、水平置中裁切（等同 object-fit: cover）
function scaleThumb(thumbEl) {
  const inner = thumbEl.querySelector('.block-thumb-inner');
  if (!inner) return;
  const tw   = thumbEl.clientWidth;
  const th   = thumbEl.clientHeight;
  const refW = 1000;
  const ih   = inner.scrollHeight;
  if (!tw || !ih) return;
  const scale = Math.min(tw / refW, th / ih);
  const xOff  = (tw - refW * scale) / 2;
  inner.style.transform       = `scale(${scale})`;
  inner.style.transformOrigin = 'top left';
  inner.style.left            = `${xOff}px`;
}

// ── Render: Category list ────────────────────────────────────
export function renderCategoryList() {
  const container = document.getElementById('category-list');
  container.innerHTML = CATEGORIES.map(cat => {
    const count  = (BLOCKS[cat.id] || []).length;
    const active = state.selectedCategory === cat.id;
    return `<button class="cat-btn ${active ? 'active' : ''}" data-cat="${cat.id}">
      <span class="cat-icon" style="background:${active ? cat.color + '22' : 'rgba(255,255,255,0.04)'}">
        ${cat.icon}
      </span>
      ${cat.label}
      <span class="cat-count">${count}</span>
    </button>`;
  }).join('');

  container.querySelectorAll('.cat-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      state.selectedCategory = btn.dataset.cat;
      renderCategoryList();
      renderBlockList();
    });
  });
}

// ── Render: Block list ───────────────────────────────────────
export function renderBlockList() {
  const container = document.getElementById('block-list');
  const blocks    = BLOCKS[state.selectedCategory] || [];

  if (blocks.length === 0) {
    container.innerHTML = `<div style="grid-column:1/-1;text-align:center;color:var(--text-secondary);font-size:12px;padding:24px;">此分類尚無區塊</div>`;
    return;
  }

  container.innerHTML = blocks.map(b => `
    <div class="block-card" draggable="true" data-block-id="${b.id}" title="${b.label}">
      <div class="block-thumb">${buildThumb(b)}</div>
      <div class="block-card-label">${b.id}</div>
    </div>
  `).join('');

  // DOM 已更新後計算縮放比例，before first paint（rAF 在 layout 後、paint 前執行）
  requestAnimationFrame(() => {
    container.querySelectorAll('.block-thumb').forEach(scaleThumb);
  });

  container.querySelectorAll('.block-card').forEach(card => {
    card.addEventListener('dragstart', e => {
      state.dragSource = { type: 'sidebar', blockId: card.dataset.blockId };
      card.classList.add('dragging');
      e.dataTransfer.effectAllowed = 'copy';
    });
    card.addEventListener('dragend', () => {
      card.classList.remove('dragging');
      state.dragSource = null;
    });
  });
}

// ── Render: Canvas Tabs ──────────────────────────────────────
export function renderCanvasTabs() {
  const container     = document.getElementById('canvas-tabs');
  const canvasIds     = Object.keys(state.canvases);
  const canDelete     = canvasIds.length > 1;
  const activeLabel   = state.canvases[state.activeCanvas]?.label || '';
  const isActiveLocked = state.canvases[state.activeCanvas]?.locked || false;
  const atLimit       = canvasIds.length >= MAX_CANVASES;

  container.innerHTML = canvasIds.map(id => {
    const cv     = state.canvases[id];
    const active = state.activeCanvas === id;
    const locked = cv.locked || false;
    return `<button class="canvas-tab${active ? ' active' : ''}${locked ? ' is-locked' : ''}" data-canvas-id="${id}">
      <span class="canvas-tab-lock-btn" data-canvas-id="${id}" title="${locked ? '解除鎖定' : '鎖定此頁面'}">${locked ? '🔒' : '🔓'}</span>
      <span class="canvas-tab-label">${cv.label}</span>
    </button>`;
  }).join('') +
  `<button class="canvas-tab-add" id="btn-add-canvas" title="${atLimit ? `最多只能建立 ${MAX_CANVASES} 個頁面` : '新增頁面'}"${atLimit ? ' disabled' : ''}>+ 新增頁面</button>` +
  (canDelete
    ? `<button class="canvas-tab-del${isActiveLocked ? ' is-locked' : ''}" id="btn-del-canvas" title="${isActiveLocked ? '請先解鎖才能刪除此頁面' : `刪除「${activeLabel}」`}"${isActiveLocked ? ' disabled' : ''}>${isActiveLocked ? '🔒 已鎖定' : `刪除「${activeLabel}」`}</button>`
    : '');

  container.querySelectorAll('.canvas-tab').forEach(btn => {
    btn.addEventListener('click', () => switchCanvas(btn.dataset.canvasId));
  });

  // 鎖定切換：stopPropagation 避免同時觸發 tab 切換
  container.querySelectorAll('.canvas-tab-lock-btn').forEach(lockBtn => {
    lockBtn.addEventListener('click', e => {
      e.stopPropagation();
      toggleCanvasLock(lockBtn.dataset.canvasId);
    });
  });

  document.getElementById('btn-add-canvas').addEventListener('click', addCanvas);

  const delBtn = document.getElementById('btn-del-canvas');
  if (delBtn) {
    delBtn.addEventListener('click', () => {
      if (isActiveLocked) return;
      removeCanvas(state.activeCanvas);
    });
  }
}

export function toggleCanvasLock(id) {
  const cv = state.canvases[id];
  if (!cv) return;
  cv.locked = !cv.locked;
  saveState();
  renderCanvasTabs();
  showToast(cv.locked ? '頁面已鎖定，無法刪除' : '頁面已解鎖', cv.locked ? '🔒' : '🔓');
}

export function addCanvas() {
  if (Object.keys(state.canvases).length >= MAX_CANVASES) return;
  state._canvasSeq++;
  const id = `page-${state._canvasSeq}`;
  state.canvases[id] = { label: `頁面 ${state._canvasSeq}`, blocks: [], locked: false };
  switchCanvas(id);
  saveState();
}

export function removeCanvas(id) {
  const canvasIds = Object.keys(state.canvases);
  if (canvasIds.length <= 1) return;

  const cv = state.canvases[id];
  if (cv.locked) {
    showToast('請先解鎖才能刪除此頁面', '🔒');
    return;
  }
  if (cv.blocks.length > 0 && !confirm(`確定要刪除「${cv.label}」嗎？此頁面共有 ${cv.blocks.length} 個區塊。`)) return;

  delete state.canvases[id];

  // 刪除後切換到最後一個剩餘頁面
  if (state.activeCanvas === id) {
    const remaining = Object.keys(state.canvases);
    state.activeCanvas = remaining[remaining.length - 1];
  }

  state.selectedCanvasBlock = null;
  renderCanvasTabs();
  renderCanvas();
  saveState();
}

export function switchCanvas(id) {
  if (!state.canvases[id]) return;
  state.activeCanvas        = id;
  state.selectedCanvasBlock = null;
  renderCanvasTabs();
  renderCanvas();
  saveState();
}

// ── Render: Canvas ───────────────────────────────────────────
export function renderCanvas() {
  const canvas = document.getElementById('page-canvas');
  const hint   = document.getElementById('empty-hint');
  const blocks = getActiveBlocks();

  // 只清除動態產生的區塊與指示線，保留 #empty-hint 元素留在 DOM 中
  // （若整批清空會把 hint 一起移除，導致下次 render 取不到而中斷）
  canvas.querySelectorAll('.canvas-block, .drop-indicator').forEach(el => el.remove());

  if (blocks.length === 0) {
    hint.style.display = 'flex';
    document.getElementById('block-count').textContent = '0 個區塊';
    return;
  }

  hint.style.display = 'none';
  document.getElementById('block-count').textContent = `${blocks.length} 個區塊`;

  blocks.forEach((item, index) => {
    const block = getBlock(item.blockId);
    if (!block) return;

    // 每個區塊前的插入指示線
    const indicator = document.createElement('div');
    indicator.className = 'drop-indicator';
    indicator.dataset.insertIndex = index;
    canvas.appendChild(indicator);

    const wrapper = document.createElement('div');
    wrapper.className = 'canvas-block';
    wrapper.dataset.uid   = item.uid;
    wrapper.dataset.index = index;
    wrapper.draggable     = true;

    if (state.selectedCanvasBlock === item.uid) {
      wrapper.style.outline = '3px solid #3b82f6';
    }

    wrapper.innerHTML = `
      <div class="canvas-block-overlay">
        <div class="canvas-block-handle" title="拖曳排序">⠿</div>
        <div class="canvas-block-badge">${block.id}</div>
        <div class="canvas-block-del" data-uid="${item.uid}" title="刪除">✕</div>
      </div>
      ${block.html}
    `;

    // 點擊選取（供匯出單一區塊用）
    wrapper.addEventListener('click', e => {
      if (e.target.closest('.canvas-block-del') || e.target.closest('.canvas-block-handle')) return;
      state.selectedCanvasBlock = (state.selectedCanvasBlock === item.uid) ? null : item.uid;
      renderCanvas();
    });

    wrapper.querySelector('.canvas-block-del').addEventListener('click', e => {
      e.stopPropagation();
      removeCanvasBlock(item.uid);
    });

    wrapper.addEventListener('dragstart', e => {
      state.dragSource = { type: 'canvas', uid: item.uid, index };
      wrapper.classList.add('dragging-from-canvas');
      e.dataTransfer.effectAllowed = 'move';
      e.stopPropagation();
    });
    wrapper.addEventListener('dragend', () => {
      wrapper.classList.remove('dragging-from-canvas');
      clearDropIndicators();
      state.dragSource = null;
      state.dragOverIndex = null;
    });
    wrapper.addEventListener('dragover', e => {
      e.preventDefault();
      e.stopPropagation();
      const rect   = wrapper.getBoundingClientRect();
      const midY   = rect.top + rect.height / 2;
      const insert = e.clientY < midY ? index : index + 1;
      showDropIndicator(insert);
    });
    wrapper.addEventListener('drop', e => {
      e.preventDefault();
      e.stopPropagation();
      handleDrop(state.dragOverIndex ?? index);
    });

    canvas.appendChild(wrapper);
  });

  // 最末的插入指示線
  const lastIndicator = document.createElement('div');
  lastIndicator.className = 'drop-indicator';
  lastIndicator.dataset.insertIndex = blocks.length;
  canvas.appendChild(lastIndicator);
}

// ── Drop indicators ──────────────────────────────────────────
export function showDropIndicator(index) {
  clearDropIndicators();
  state.dragOverIndex = index;
  document.querySelectorAll('.drop-indicator').forEach(el => {
    if (parseInt(el.dataset.insertIndex) === index) el.classList.add('visible');
  });
}

export function clearDropIndicators() {
  document.querySelectorAll('.drop-indicator').forEach(el => el.classList.remove('visible'));
  state.dragOverIndex = null;
}

// ── Drop logic ───────────────────────────────────────────────
export function handleDrop(targetIndex) {
  clearDropIndicators();
  if (!state.dragSource) return;
  const blocks = getActiveBlocks();

  if (state.dragSource.type === 'sidebar') {
    const block = getBlock(state.dragSource.blockId);
    if (!block) return;
    const newItem = { uid: genUid(), blockId: block.id };
    const clamp   = Math.max(0, Math.min(targetIndex, blocks.length));
    blocks.splice(clamp, 0, newItem);
    state.selectedCanvasBlock = null;
    renderCanvas();
    saveState();
    showToast(`已加入 ${block.id}`);
  } else if (state.dragSource.type === 'canvas') {
    const fromIndex = state.dragSource.index;
    if (fromIndex === targetIndex || fromIndex === targetIndex - 1) return;
    const [moved] = blocks.splice(fromIndex, 1);
    const insertAt = targetIndex > fromIndex ? targetIndex - 1 : targetIndex;
    const clamp    = Math.max(0, Math.min(insertAt, blocks.length));
    blocks.splice(clamp, 0, moved);
    renderCanvas();
    saveState();
  }
}

export function removeCanvasBlock(uid) {
  const cv  = state.canvases[state.activeCanvas];
  cv.blocks = cv.blocks.filter(b => b.uid !== uid);
  if (state.selectedCanvasBlock === uid) state.selectedCanvasBlock = null;
  renderCanvas();
  saveState();
  showToast('已移除區塊', '−');
}

// ── Canvas drop zone（背景 drop）────────────────────────────
export function initCanvasDrop() {
  const canvasEl = document.getElementById('page-canvas');

  canvasEl.addEventListener('dragover', e => {
    e.preventDefault();
    if (getActiveBlocks().length === 0) {
      canvasEl.style.outline       = '3px dashed rgba(59,130,246,0.5)';
      canvasEl.style.outlineOffset = '-8px';
    } else {
      showDropIndicator(getActiveBlocks().length);
    }
  });

  canvasEl.addEventListener('dragleave', e => {
    if (!canvasEl.contains(e.relatedTarget)) {
      canvasEl.style.outline       = '';
      canvasEl.style.outlineOffset = '';
      clearDropIndicators();
    }
  });

  canvasEl.addEventListener('drop', e => {
    e.preventDefault();
    canvasEl.style.outline       = '';
    canvasEl.style.outlineOffset = '';
    handleDrop(state.dragOverIndex ?? getActiveBlocks().length);
  });
}
