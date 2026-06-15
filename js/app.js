/**
 * app.js — state、render、drag & drop 邏輯
 * render 與 dnd 緊耦合（互相呼叫），故合為一個模組避免循環 import。
 */
import { CATEGORIES, BLOCKS, getBlock } from './registry.js';

// ── State ────────────────────────────────────────────────────
export const state = {
  selectedCategory:    'header',
  canvasBlocks:        [],      // [{ uid, blockId }]
  dragSource:          null,    // { type:'sidebar'|'canvas', blockId?, uid?, index? }
  dragOverIndex:       null,
  selectedCanvasBlock: null,
};

let uidCounter = 0;
const genUid = () => `b${++uidCounter}`;

// ── Toast ────────────────────────────────────────────────────
export function showToast(msg, icon = '✓') {
  const t = document.getElementById('toast');
  t.innerHTML = `<span>${icon}</span> ${msg}`;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2200);
}

// ── Thumbnail HTML builder ───────────────────────────────────
function buildThumb(block) {
  const t = block.thumbType;

  if (t === 'header') {
    return `<div class="thumb-header">
      <div class="thumb-logo"></div>
      <div class="thumb-nav"><span></span><span></span><span></span><span></span></div>
      <div class="thumb-btn"></div>
    </div>`;
  }
  if (t === 'banner') {
    return `<div class="thumb-banner">
      <div class="thumb-banner-title"></div>
      <div class="thumb-banner-sub"></div>
      <div class="thumb-banner-sub" style="width:35%"></div>
      <div class="thumb-banner-cta"></div>
    </div>`;
  }
  if (t === 'columns') {
    const n = block.thumbCols || 3;
    const cols = Array.from({ length: n }, () => `
      <div class="thumb-col">
        <div class="thumb-col-line"></div>
        <div class="thumb-col-line short"></div>
        <div class="thumb-col-line short"></div>
      </div>`).join('');
    return `<div class="thumb-cols">${cols}</div>`;
  }
  if (t === 'cta') {
    return `<div class="thumb-cta">
      <div class="thumb-cta-text"></div>
      <div class="thumb-cta-text" style="width:35%"></div>
      <div class="thumb-cta-btn"></div>
    </div>`;
  }
  if (t === 'footer') {
    return `<div class="thumb-footer">
      <div class="thumb-footer-cols">
        <div class="thumb-footer-col">
          <div class="thumb-footer-line head"></div>
          <div class="thumb-footer-line"></div>
          <div class="thumb-footer-line"></div>
        </div>
        <div class="thumb-footer-col">
          <div class="thumb-footer-line head"></div>
          <div class="thumb-footer-line"></div>
          <div class="thumb-footer-line"></div>
        </div>
        <div class="thumb-footer-col">
          <div class="thumb-footer-line head"></div>
          <div class="thumb-footer-line"></div>
          <div class="thumb-footer-line"></div>
        </div>
      </div>
      <div class="thumb-footer-bar"></div>
    </div>`;
  }
  return '';
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

// ── Render: Canvas ───────────────────────────────────────────
export function renderCanvas() {
  const canvas = document.getElementById('page-canvas');
  const hint   = document.getElementById('empty-hint');

  // 只清除動態產生的區塊與指示線，保留 #empty-hint 元素留在 DOM 中
  // （若整批清空會把 hint 一起移除，導致下次 render 取不到而中斷）
  canvas.querySelectorAll('.canvas-block, .drop-indicator').forEach(el => el.remove());

  if (state.canvasBlocks.length === 0) {
    hint.style.display = 'flex';
    document.getElementById('block-count').textContent = '0 個區塊';
    return;
  }

  hint.style.display = 'none';
  document.getElementById('block-count').textContent = `${state.canvasBlocks.length} 個區塊`;

  state.canvasBlocks.forEach((item, index) => {
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
  lastIndicator.dataset.insertIndex = state.canvasBlocks.length;
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

  if (state.dragSource.type === 'sidebar') {
    const block = getBlock(state.dragSource.blockId);
    if (!block) return;
    const newItem = { uid: genUid(), blockId: block.id };
    const clamp   = Math.max(0, Math.min(targetIndex, state.canvasBlocks.length));
    state.canvasBlocks.splice(clamp, 0, newItem);
    state.selectedCanvasBlock = null;
    renderCanvas();
    showToast(`已加入 ${block.id}`);
  } else if (state.dragSource.type === 'canvas') {
    const fromIndex = state.dragSource.index;
    if (fromIndex === targetIndex || fromIndex === targetIndex - 1) return;
    const [moved] = state.canvasBlocks.splice(fromIndex, 1);
    const insertAt = targetIndex > fromIndex ? targetIndex - 1 : targetIndex;
    const clamp    = Math.max(0, Math.min(insertAt, state.canvasBlocks.length));
    state.canvasBlocks.splice(clamp, 0, moved);
    renderCanvas();
  }
}

export function removeCanvasBlock(uid) {
  state.canvasBlocks = state.canvasBlocks.filter(b => b.uid !== uid);
  if (state.selectedCanvasBlock === uid) state.selectedCanvasBlock = null;
  renderCanvas();
  showToast('已移除區塊', '−');
}

// ── Canvas drop zone（背景 drop）────────────────────────────
export function initCanvasDrop() {
  const canvasEl = document.getElementById('page-canvas');

  canvasEl.addEventListener('dragover', e => {
    e.preventDefault();
    if (state.canvasBlocks.length === 0) {
      canvasEl.style.outline       = '3px dashed rgba(59,130,246,0.5)';
      canvasEl.style.outlineOffset = '-8px';
    } else {
      showDropIndicator(state.canvasBlocks.length);
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
    handleDrop(state.dragOverIndex ?? state.canvasBlocks.length);
  });
}
