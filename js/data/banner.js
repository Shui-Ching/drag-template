import { T } from './tokens.js';

export default [
  {
    id: 'banner0001',
    label: 'Split Hero',
    thumbType: 'banner',
    html: `<section style="background:#fff;display:flex;min-height:480px;font-family:${T.font};">
  <div style="flex:1;display:flex;flex-direction:column;justify-content:center;padding:64px 56px;">
    <div style="font-size:12px;font-weight:600;letter-spacing:0.12em;text-transform:uppercase;color:${T.indigo500};margin-bottom:16px;">NEW PRODUCT 2024</div>
    <h1 style="font-size:48px;font-weight:900;line-height:1.1;color:${T.slate900};margin-bottom:20px;letter-spacing:-1px;">Build Better<br>Faster.</h1>
    <p style="font-size:16px;color:${T.slate500};line-height:1.7;margin-bottom:36px;max-width:420px;">用最簡單的方式，打造出讓客戶驚豔的產品頁面。專為團隊設計，無需工程背景。</p>
    <div style="display:flex;gap:12px;">
      <button style="background:${T.slate900};color:#fff;border:none;padding:14px 32px;border-radius:8px;font-size:15px;font-weight:600;cursor:pointer;">立即開始</button>
      <button style="background:transparent;color:${T.slate900};border:2px solid ${T.slate200};padding:14px 32px;border-radius:8px;font-size:15px;font-weight:600;cursor:pointer;">了解更多 →</button>
    </div>
  </div>
  <div style="flex:1;background:linear-gradient(135deg,#dbeafe 0%,#e0e7ff 50%,#fae8ff 100%);display:flex;align-items:center;justify-content:center;">
    <div style="width:260px;height:180px;background:rgba(255,255,255,0.7);backdrop-filter:blur(8px);border-radius:16px;border:1px solid rgba(255,255,255,0.8);box-shadow:0 20px 60px rgba(0,0,0,0.08);display:flex;align-items:center;justify-content:center;flex-direction:column;gap:12px;">
      <div style="width:60px;height:60px;background:${T.gradIndigo};border-radius:14px;"></div>
      <div style="width:120px;height:8px;background:${T.slate200};border-radius:4px;"></div>
      <div style="width:80px;height:6px;background:${T.slate100};border-radius:3px;"></div>
    </div>
  </div>
</section>`,
  },
  {
    id: 'banner0002',
    label: 'Center Dark Hero',
    thumbType: 'banner',
    html: `<section style="background:#09090b;min-height:520px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:80px 48px;font-family:${T.font};position:relative;overflow:hidden;">
  <div style="position:absolute;inset:0;background:radial-gradient(ellipse 80% 60% at 50% 0%,rgba(99,102,241,0.15) 0%,transparent 70%);pointer-events:none;"></div>
  <div style="display:inline-flex;align-items:center;gap:8px;background:rgba(99,102,241,0.1);border:1px solid rgba(99,102,241,0.3);border-radius:999px;padding:6px 16px;margin-bottom:28px;">
    <span style="width:6px;height:6px;background:${T.indigo500};border-radius:50%;display:inline-block;"></span>
    <span style="font-size:12px;color:#a5b4fc;font-weight:500;">全新功能上線</span>
  </div>
  <h1 style="font-size:56px;font-weight:900;color:#fff;line-height:1.1;letter-spacing:-2px;margin-bottom:20px;max-width:700px;">打造<span style="background:linear-gradient(135deg,${T.indigo400},#c084fc);-webkit-background-clip:text;-webkit-text-fill-color:transparent;">未來感</span>的數位體驗</h1>
  <p style="font-size:17px;color:#71717a;line-height:1.7;margin-bottom:40px;max-width:500px;">幫助品牌說出更有力量的故事，讓每一個接觸點都成為轉換機會。</p>
  <div style="display:flex;gap:14px;">
    <button style="background:${T.gradIndigo};color:#fff;border:none;padding:14px 36px;border-radius:10px;font-size:15px;font-weight:700;cursor:pointer;box-shadow:0 0 30px rgba(99,102,241,0.4);">免費體驗 14 天</button>
    <button style="background:rgba(255,255,255,0.05);color:#a1a1aa;border:1px solid rgba(255,255,255,0.1);padding:14px 28px;border-radius:10px;font-size:15px;cursor:pointer;">觀看 Demo →</button>
  </div>
</section>`,
  },
  {
    id: 'banner0003',
    label: 'Clean Minimal',
    thumbType: 'banner',
    html: `<section style="background:#fafafa;min-height:400px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:80px 48px;font-family:${T.font};border-bottom:1px solid #e5e7eb;">
  <p style="font-size:12px;font-weight:700;letter-spacing:0.18em;text-transform:uppercase;color:#9ca3af;margin-bottom:24px;">SINCE 2019</p>
  <h1 style="font-size:52px;font-weight:900;color:#111827;line-height:1.05;letter-spacing:-2px;margin-bottom:24px;max-width:640px;">簡單，<br>才是最強大的設計。</h1>
  <p style="font-size:16px;color:#6b7280;line-height:1.8;max-width:480px;margin-bottom:40px;">我們相信優秀的產品應該不需要說明書。每一個細節都經過精心設計，讓使用者自然地找到答案。</p>
  <a href="#" style="display:inline-flex;align-items:center;gap:8px;font-size:15px;font-weight:700;color:#111827;text-decoration:none;border-bottom:2px solid #111827;padding-bottom:2px;">探索我們的故事 →</a>
</section>`,
  },
  {
    id: 'banner0004',
    label: 'Image Overlay',
    thumbType: 'banner',
    html: `<section style="position:relative;min-height:460px;display:flex;align-items:center;font-family:${T.font};overflow:hidden;background:linear-gradient(120deg,#0369a1 0%,#075985 40%,#0c4a6e 100%);">
  <div style="position:absolute;inset:0;opacity:0.1;background-image:repeating-linear-gradient(45deg,#fff 0,#fff 1px,transparent 0,transparent 50%);background-size:20px 20px;"></div>
  <div style="position:relative;padding:64px 64px;max-width:660px;">
    <div style="font-size:12px;font-weight:600;letter-spacing:0.12em;text-transform:uppercase;color:#7dd3fc;margin-bottom:20px;">企業解決方案</div>
    <h2 style="font-size:44px;font-weight:900;color:#fff;line-height:1.15;letter-spacing:-1px;margin-bottom:20px;">為您的業務<br>量身打造最佳策略</h2>
    <p style="font-size:16px;color:rgba(255,255,255,0.75);line-height:1.7;margin-bottom:36px;">超過 500 家企業選擇我們，平均提升 35% 的業務效率與客戶滿意度。</p>
    <button style="background:#fff;color:#0369a1;border:none;padding:14px 32px;border-radius:8px;font-size:15px;font-weight:700;cursor:pointer;">聯絡業務顧問</button>
  </div>
</section>`,
  },
];
