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

// ── 清空按鈕（清空目前作用中的頁面）────────────────────────
document.getElementById('btn-clear').addEventListener('click', () => {
  const cv = state.canvases[state.activeCanvas];
  if (cv.blocks.length === 0) return;
  if (confirm(`確定要清空「${cv.label}」嗎？`)) {
    cv.blocks                 = [];
    state.selectedCanvasBlock = null;
    renderCanvas();
    saveState();
    showToast('頁面已清空', '⊘');
  }
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
