import { T } from './tokens.js';

export default [
  {
    id: 'cta0001',
    label: 'Dark CTA',
    thumbType: 'cta',
    html: `<section style="background:${T.slate900};padding:80px 48px;text-align:center;">
  <h2 style="font-size:40px;font-weight:900;color:#fff;letter-spacing:-0.5px;margin-bottom:16px;">準備好開始了嗎？</h2>
  <p style="font-size:16px;color:${T.slate500};margin-bottom:36px;max-width:480px;margin-left:auto;margin-right:auto;line-height:1.7;">加入超過 50,000 位用戶的行列，今天就開始您的免費試用。</p>
  <div style="display:flex;gap:12px;justify-content:center;">
    <button style="background:${T.gradIndigo};color:#fff;border:none;padding:15px 36px;border-radius:10px;font-size:16px;font-weight:700;cursor:pointer;box-shadow:0 0 30px rgba(99,102,241,0.35);">免費開始 →</button>
    <button style="background:transparent;color:${T.slate400};border:1px solid rgba(255,255,255,0.1);padding:15px 28px;border-radius:10px;font-size:16px;cursor:pointer;">了解更多</button>
  </div>
</section>`,
  },
  {
    id: 'cta0002',
    label: 'Newsletter',
    thumbType: 'cta',
    html: `<section style="background:#f4f5f6;padding:100px 0;font-family:'Noto Sans TC',sans-serif;">
  <div style="max-width:1200px;margin:0 auto;padding:0 48px;">
    <div style="background:#fff;border-radius:16px;padding:64px 72px;display:flex;align-items:center;gap:80px;">
      <div style="flex:1;">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:20px;">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="${T.indigo500}" viewBox="0 0 16 16"><path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"/></svg>
          <span style="font-size:12px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:${T.indigo500};">Newsletter</span>
        </div>
        <h2 style="font-size:32px;font-weight:500;color:${T.slate900};letter-spacing:-0.3px;margin:0 0 16px;line-height:1.2;">訂閱我們的電子報</h2>
        <p style="font-size:16px;color:${T.slate500};line-height:1.75;margin:0 0 20px;">每週一封精選內容，不發廣告，只給您真正有用的資訊。</p>
        <p style="font-size:14px;color:${T.slate400};margin:0;">已有 8,200+ 人訂閱 · 可隨時取消</p>
      </div>
      <div style="flex:1;">
        <div style="display:flex;border:1.5px solid ${T.slate200};border-radius:10px;overflow:hidden;background:#fff;">
          <input type="email" placeholder="輸入您的 Email" style="flex:1;padding:16px 20px;border:none;font-size:15px;background:transparent;outline:none;color:${T.slate900};min-width:0;">
          <button style="background:${T.slate900};color:#fff;border:none;padding:16px 28px;font-size:15px;font-weight:700;cursor:pointer;white-space:nowrap;font-family:'Noto Sans TC',sans-serif;">訂閱</button>
        </div>
        <p style="font-size:13px;color:${T.slate400};margin:12px 0 0;">訂閱即表示您同意我們的隱私政策</p>
      </div>
    </div>
  </div>
</section>`,
  },
  {
    id: 'cta0003',
    label: 'Gradient Banner',
    thumbType: 'cta',
    html: `<section style="background:${T.slate400};padding:100px 0;font-family:'Noto Sans TC',sans-serif;">
  <div style="max-width:1200px;margin:0 auto;padding:0 48px;text-align:center;">
    <h2 style="font-size:40px;font-weight:900;color:#fff;letter-spacing:-0.5px;margin:0 0 16px;">讓我們一起創造不凡</h2>
    <p style="font-size:16px;color:rgba(255,255,255,0.75);line-height:1.75;margin:0 auto 40px;max-width:480px;">立即預約 30 分鐘免費諮詢，由專家協助您規劃最適合的成長策略。</p>
    <div style="display:flex;gap:12px;justify-content:center;">
      <button style="background:#fff;color:${T.indigo600};border:none;padding:15px 40px;border-radius:10px;font-size:16px;font-weight:700;cursor:pointer;font-family:'Noto Sans TC',sans-serif;">預約免費諮詢</button>
      <button style="background:transparent;color:#fff;border:1.5px solid rgba(255,255,255,0.5);padding:15px 28px;border-radius:10px;font-size:16px;cursor:pointer;font-family:'Noto Sans TC',sans-serif;">了解更多</button>
    </div>
  </div>
</section>`,
  },
];
