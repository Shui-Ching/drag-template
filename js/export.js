import { state, showToast } from './app.js';
import { getBlock } from './registry.js';

export async function exportJPG(target, filename) {
  if (!target) { showToast('無可匯出的內容', '!'); return; }
  showToast('正在產生圖片…', '⏳');

  // 匯出前把可捲動容器歸零，避免 html2canvas 受捲動偏移影響而裁掉視窗外的區塊
  const scroller       = document.getElementById('canvas-area');
  const prevScrollTop  = scroller ? scroller.scrollTop  : 0;
  const prevScrollLeft = scroller ? scroller.scrollLeft : 0;
  if (scroller) { scroller.scrollTop = 0; scroller.scrollLeft = 0; }

  // 用元素「實際渲染寬度」釘住輸出寬度；windowWidth 仍維持真實視窗寬度，
  // 避免 html2canvas 用 scrollWidth 重排文件時 grid（sidebar 260px）擠壓畫布，造成右側空白
  const rect = target.getBoundingClientRect();

  try {
    const canvas = await html2canvas(target, {
      scale:           2,
      useCORS:         true,
      backgroundColor: '#ffffff',
      logging:         false,
      // 處理堆疊超過一個畫面高的內容：歸零捲動並指定完整高度
      scrollX:         0,
      scrollY:         0,
      width:           rect.width,
      height:          target.scrollHeight,
      windowWidth:     document.documentElement.offsetWidth,
      windowHeight:    document.documentElement.offsetHeight,
    });
    const link      = document.createElement('a');
    link.download   = filename;
    link.href       = canvas.toDataURL('image/jpeg', 0.95);
    link.click();
    showToast('JPG 匯出成功！', '↓');
  } catch (err) {
    showToast('匯出失敗，請稍後再試', '✕');
    console.error(err);
  } finally {
    // 還原使用者原本的捲動位置
    if (scroller) { scroller.scrollTop = prevScrollTop; scroller.scrollLeft = prevScrollLeft; }
  }
}

export function exportHTML() {
  const cv = state.canvases[state.activeCanvas];
  if (cv.blocks.length === 0) { showToast('畫布是空的', '!'); return; }

  const blocksHtml = cv.blocks
    .map(item => getBlock(item.blockId)?.html ?? '')
    .filter(Boolean)
    .join('\n\n');

  const doc = `<!DOCTYPE html>
<html lang="zh-TW">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Page Export</title>
<style>
  *, *::before, *::after { box-sizing: border-box; }
  body { margin: 0; font-family: sans-serif; }
</style>
</head>
<body>

${blocksHtml}

</body>
</html>`;

  const blob = new Blob([doc], { type: 'text/html;charset=utf-8' });
  const url  = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href     = url;
  link.download = 'page-export.html';
  link.click();
  URL.revokeObjectURL(url);
  showToast('HTML 原始碼匯出成功！', '↓');
}

export function bindExportButtons() {
  document.getElementById('btn-export-html').addEventListener('click', () => {
    exportHTML();
  });

  document.getElementById('btn-export-page').addEventListener('click', () => {
    const cv = state.canvases[state.activeCanvas];
    if (cv.blocks.length === 0) { showToast('畫布是空的', '!'); return; }
    exportJPG(document.getElementById('page-canvas'), 'page-export.jpg');
  });

  document.getElementById('btn-export-block').addEventListener('click', () => {
    if (!state.selectedCanvasBlock) { showToast('請先點選畫布中的區塊', '!'); return; }
    const el     = document.querySelector(`.canvas-block[data-uid="${state.selectedCanvasBlock}"]`);
    const blocks = state.canvases[state.activeCanvas].blocks;
    const block  = blocks.find(b => b.uid === state.selectedCanvasBlock);
    exportJPG(el, `block-${block?.blockId ?? 'export'}.jpg`);
  });
}
