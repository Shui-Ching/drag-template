import {
  state,
  showToast,
  renderCategoryList,
  renderBlockList,
  renderCanvas,
  initCanvasDrop,
} from './app.js';
import { bindExportButtons } from './export.js';

// ── 清空按鈕 ─────────────────────────────────────────────────
document.getElementById('btn-clear').addEventListener('click', () => {
  if (state.canvasBlocks.length === 0) return;
  if (confirm('確定要清空畫布嗎？')) {
    state.canvasBlocks        = [];
    state.selectedCanvasBlock = null;
    renderCanvas();
    showToast('畫布已清空', '⊘');
  }
});

// ── 匯出按鈕 ─────────────────────────────────────────────────
bindExportButtons();

// ── Init ─────────────────────────────────────────────────────
renderCategoryList();
renderBlockList();
renderCanvas();
initCanvasDrop();
