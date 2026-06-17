import {
  state,
  showToast,
  saveState,
  loadState,
  renderCategoryList,
  renderBlockList,
  renderCanvas,
  renderCanvasTabs,
  initCanvasDrop,
} from './app.js';
import { bindExportButtons } from './export.js';

// ── 確認彈窗工具函式 ─────────────────────────────────────────
function showConfirm({ title, body, confirmText = '確認', onConfirm }) {
  const modal      = document.getElementById('confirm-modal');
  const titleEl    = document.getElementById('modal-title');
  const bodyEl     = document.getElementById('modal-body');
  const confirmBtn = document.getElementById('modal-confirm');
  const cancelBtn  = document.getElementById('modal-cancel');

  titleEl.textContent    = title;
  bodyEl.innerHTML       = body;
  confirmBtn.textContent = confirmText;

  const close = () => {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    cleanup();
  };

  const handleConfirm = () => { close(); onConfirm(); };

  const handleEsc = (e) => { if (e.key === 'Escape') close(); };

  const handleOverlay = (e) => { if (e.target === modal) close(); };

  function cleanup() {
    confirmBtn.removeEventListener('click', handleConfirm);
    cancelBtn.removeEventListener('click',  close);
    document.removeEventListener('keydown', handleEsc);
    modal.removeEventListener('click',      handleOverlay);
  }

  confirmBtn.addEventListener('click', handleConfirm);
  cancelBtn.addEventListener('click',  close);
  document.addEventListener('keydown', handleEsc);
  modal.addEventListener('click',      handleOverlay);

  modal.setAttribute('aria-hidden', 'false');
  modal.classList.add('is-open');
  // 讓焦點落在確認按鈕，方便鍵盤操作
  requestAnimationFrame(() => confirmBtn.focus());
}

// ── 重置全部（清空所有頁面回到初始狀態）────────────────────
document.getElementById('btn-clear').addEventListener('click', () => {
  const pageCount = Object.keys(state.canvases).length;
  const allBlocks = Object.values(state.canvases)
    .reduce((acc, cv) => acc + cv.blocks.length, 0);

  if (allBlocks === 0 && pageCount <= 1) return;

  showConfirm({
    title:       '重置全部頁面？',
    body:        `目前共有 <strong>${pageCount} 個頁面</strong>、<strong>${allBlocks} 個區塊</strong>。<br>確認後將全部清空並回到初始狀態，<br>此操作無法復原。`,
    confirmText: '確認重置',
    onConfirm:   () => {
      state.canvases            = { 'page-1': { label: '頁面 1', blocks: [] } };
      state.activeCanvas        = 'page-1';
      state._canvasSeq          = 1;
      state.selectedCanvasBlock = null;
      renderCanvasTabs();
      renderCanvas();
      saveState();
      showToast('已全部清空並重置', '⊘');
    },
  });
});

// ── 匯出按鈕 ─────────────────────────────────────────────────
bindExportButtons();

// ── 回到頂端 ──────────────────────────────────────────────────
const canvasArea = document.getElementById('canvas-area');
const goTopBtn   = document.getElementById('go-top');

canvasArea.addEventListener('scroll', () => {
  goTopBtn.classList.toggle('visible', canvasArea.scrollTop > 200);
});

goTopBtn.addEventListener('click', () => {
  canvasArea.scrollTo({ top: 0, behavior: 'smooth' });
});

// ── Init ─────────────────────────────────────────────────────
loadState();   // 優先還原 localStorage 的存檔
renderCategoryList();
renderBlockList();
renderCanvasTabs();
renderCanvas();
initCanvasDrop();
