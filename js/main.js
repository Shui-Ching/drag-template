import {
  state,
  showToast,
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
    showToast('頁面已清空', '⊘');
  }
});

// ── 匯出按鈕 ─────────────────────────────────────────────────
bindExportButtons();

// ── Init ─────────────────────────────────────────────────────
renderCategoryList();
renderBlockList();
renderCanvasTabs();
renderCanvas();
initCanvasDrop();
