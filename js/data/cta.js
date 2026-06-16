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
    <button style="background:${T.gradIndigo};color:#fff;border:none;padding:15px 36px;border-radius:10px;font-size:15px;font-weight:700;cursor:pointer;box-shadow:0 0 30px rgba(99,102,241,0.35);">免費開始 →</button>
    <button style="background:transparent;color:${T.slate400};border:1px solid rgba(255,255,255,0.1);padding:15px 28px;border-radius:10px;font-size:15px;cursor:pointer;">了解更多</button>
  </div>
</section>`,
  },
  {
    id: 'cta0002',
    label: 'Newsletter',
    thumbType: 'cta',
    html: `<section style="background:#fffbeb;padding:64px 48px;text-align:center;border-top:1px solid #fde68a;border-bottom:1px solid #fde68a;">
  <div style="font-size:32px;margin-bottom:12px;">📬</div>
  <h2 style="font-size:28px;font-weight:900;color:#78350f;letter-spacing:-0.3px;margin-bottom:12px;">訂閱我們的電子報</h2>
  <p style="font-size:15px;color:#92400e;margin-bottom:28px;opacity:0.8;">每週一封精選內容，不發廣告，只給您真正有用的資訊。</p>
  <div style="display:flex;gap:0;max-width:440px;margin:0 auto;box-shadow:0 4px 20px rgba(0,0,0,0.1);">
    <input type="email" placeholder="輸入您的 Email" style="flex:1;padding:14px 20px;border:none;border-radius:10px 0 0 10px;font-size:14px;background:#fff;outline:none;">
    <button style="background:#d97706;color:#fff;border:none;padding:14px 24px;border-radius:0 10px 10px 0;font-size:14px;font-weight:700;cursor:pointer;white-space:nowrap;">訂閱</button>
  </div>
  <p style="font-size:12px;color:#a16207;margin-top:14px;opacity:0.7;">已有 8,200+ 人訂閱 · 可隨時取消</p>
</section>`,
  },
  {
    id: 'cta0003',
    label: 'Gradient Banner',
    thumbType: 'cta',
    html: `<section style="background:linear-gradient(135deg,${T.indigo500} 0%,${T.purple500} 50%,#ec4899 100%);padding:64px 48px;text-align:center;">
  <h2 style="font-size:36px;font-weight:900;color:#fff;letter-spacing:-0.5px;margin-bottom:14px;">讓我們一起創造不凡</h2>
  <p style="font-size:16px;color:rgba(255,255,255,0.8);margin-bottom:32px;">立即預約 30 分鐘免費諮詢，由專家協助您規劃最適合的成長策略。</p>
  <button style="background:#fff;color:${T.indigo500};border:none;padding:15px 40px;border-radius:10px;font-size:15px;font-weight:800;cursor:pointer;box-shadow:0 8px 30px rgba(0,0,0,0.2);">預約免費諮詢</button>
</section>`,
  },
];
