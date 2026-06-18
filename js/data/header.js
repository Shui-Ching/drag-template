import { T } from './tokens.js';

export default [
  {
    id: 'header0001',
    label: 'Dark Nav',
    thumbType: 'header',
    html: `<header style="background:${T.slate900};padding:18px 48px;display:flex;align-items:center;justify-content:space-between;">
  <div style="display:flex;align-items:center;gap:10px;">
    <div style="width:34px;height:34px;background:${T.blue500};border-radius:8px;display:flex;align-items:center;justify-content:center;">
      <span style="color:#fff;font-size:16px;font-weight:900;">P</span>
    </div>
    <span style="color:${T.slate50};font-size:17px;font-weight:700;letter-spacing:-0.3px;">Brand</span>
  </div>
  <nav style="display:flex;gap:28px;">
    <a href="#" style="color:${T.slate400};text-decoration:none;font-size:16px;">Product</a>
    <a href="#" style="color:${T.slate400};text-decoration:none;font-size:16px;">Solutions</a>
    <a href="#" style="color:${T.slate400};text-decoration:none;font-size:16px;">Pricing</a>
    <a href="#" style="color:${T.slate400};text-decoration:none;font-size:16px;">Blog</a>
  </nav>
  <div style="display:flex;gap:12px;align-items:center;">
    <a href="#" style="color:${T.slate400};text-decoration:none;font-size:16px;">Log in</a>
    <button style="background:${T.blue500};color:#fff;border:none;padding:9px 22px;border-radius:8px;font-size:16px;font-weight:600;cursor:pointer;">Sign up</button>
  </div>
</header>`,
  },
  {
    id: 'header0002',
    label: 'Minimal White',
    thumbType: 'header',
    html: `<header style="background:#fff;padding:20px 48px;display:flex;align-items:center;justify-content:space-between;border-bottom:2px solid #000;">
  <div style="font-size:20px;font-weight:900;color:#000;letter-spacing:-1px;">BRAND.</div>
  <nav style="display:flex;gap:32px;">
    <a href="#" style="color:#000;text-decoration:none;font-size:16px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;">Work</a>
    <a href="#" style="color:#000;text-decoration:none;font-size:16px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;">About</a>
    <a href="#" style="color:#000;text-decoration:none;font-size:16px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;">Journal</a>
    <a href="#" style="color:#000;text-decoration:none;font-size:16px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;">Contact</a>
  </nav>
  <div style="font-size:16px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;">EN / ZH</div>
</header>`,
  },
  {
    id: 'header0003',
    label: 'Gradient Center',
    thumbType: 'header',
    html: `<header style="background:${T.gradIndigo};padding:20px 0;">
  <div style="max-width:1200px;margin:0 auto;padding:0 48px;display:flex;flex-direction:column;align-items:center;gap:14px;">
    <div style="color:#fff;font-size:20px;font-weight:800;letter-spacing:-0.5px;display:flex;align-items:center;gap:8px;">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#fff" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/></svg>
      BRAND
    </div>
    <nav style="display:flex;gap:36px;">
      <a href="#" style="color:rgba(255,255,255,0.8);text-decoration:none;font-size:15px;font-weight:500;letter-spacing:0.1em;text-transform:uppercase;">Home</a>
      <a href="#" style="color:rgba(255,255,255,0.8);text-decoration:none;font-size:15px;font-weight:500;letter-spacing:0.1em;text-transform:uppercase;">About</a>
      <a href="#" style="color:rgba(255,255,255,0.8);text-decoration:none;font-size:15px;font-weight:500;letter-spacing:0.1em;text-transform:uppercase;">Services</a>
      <a href="#" style="color:rgba(255,255,255,0.8);text-decoration:none;font-size:15px;font-weight:500;letter-spacing:0.1em;text-transform:uppercase;">Contact</a>
    </nav>
  </div>
</header>`,
  },
  {
    id: 'header0004',
    label: 'Glass Dark',
    thumbType: 'header',
    html: `<header style="background:rgba(10,10,20,0.95);backdrop-filter:blur(12px);padding:16px 48px;display:flex;align-items:center;gap:40px;border-bottom:1px solid rgba(255,255,255,0.08);">
  <div style="color:#fff;font-size:18px;font-weight:800;letter-spacing:-0.5px;flex-shrink:0;">B<span style="color:${T.indigo400};">.</span></div>
  <nav style="display:flex;gap:24px;flex:1;">
    <a href="#" style="color:rgba(255,255,255,0.6);text-decoration:none;font-size:16px;">首頁</a>
    <a href="#" style="color:rgba(255,255,255,0.6);text-decoration:none;font-size:16px;">服務</a>
    <a href="#" style="color:rgba(255,255,255,0.6);text-decoration:none;font-size:16px;">作品</a>
    <a href="#" style="color:rgba(255,255,255,0.6);text-decoration:none;font-size:16px;">關於</a>
  </nav>
  <div style="display:flex;gap:8px;">
    <button style="background:transparent;color:rgba(255,255,255,0.6);border:1px solid rgba(255,255,255,0.15);padding:8px 18px;border-radius:6px;font-size:16px;cursor:pointer;">登入</button>
    <button style="background:${T.gradIndigo};color:#fff;border:none;padding:8px 18px;border-radius:6px;font-size:16px;font-weight:600;cursor:pointer;">免費試用</button>
  </div>
</header>`,
  },
];
