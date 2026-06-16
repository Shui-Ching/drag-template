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
    <a href="#" style="color:${T.slate400};text-decoration:none;font-size:14px;">Product</a>
    <a href="#" style="color:${T.slate400};text-decoration:none;font-size:14px;">Solutions</a>
    <a href="#" style="color:${T.slate400};text-decoration:none;font-size:14px;">Pricing</a>
    <a href="#" style="color:${T.slate400};text-decoration:none;font-size:14px;">Blog</a>
  </nav>
  <div style="display:flex;gap:12px;align-items:center;">
    <a href="#" style="color:${T.slate400};text-decoration:none;font-size:14px;">Log in</a>
    <button style="background:${T.blue500};color:#fff;border:none;padding:9px 22px;border-radius:8px;font-size:14px;font-weight:600;cursor:pointer;">Sign up</button>
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
    <a href="#" style="color:#000;text-decoration:none;font-size:12px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;">Work</a>
    <a href="#" style="color:#000;text-decoration:none;font-size:12px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;">About</a>
    <a href="#" style="color:#000;text-decoration:none;font-size:12px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;">Journal</a>
    <a href="#" style="color:#000;text-decoration:none;font-size:12px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;">Contact</a>
  </nav>
  <div style="font-size:12px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;">EN / ZH</div>
</header>`,
  },
  {
    id: 'header0003',
    label: 'Gradient Center',
    thumbType: 'header',
    html: `<header style="background:linear-gradient(135deg,#1e1b4b 0%,#312e81 50%,#4c1d95 100%);padding:24px 48px;">
  <div style="text-align:center;margin-bottom:16px;">
    <span style="color:#fff;font-size:22px;font-weight:800;letter-spacing:-0.5px;">✦ BRAND</span>
  </div>
  <nav style="display:flex;gap:36px;justify-content:center;">
    <a href="#" style="color:rgba(255,255,255,0.75);text-decoration:none;font-size:12px;letter-spacing:0.1em;text-transform:uppercase;">Home</a>
    <a href="#" style="color:rgba(255,255,255,0.75);text-decoration:none;font-size:12px;letter-spacing:0.1em;text-transform:uppercase;">About</a>
    <a href="#" style="color:rgba(255,255,255,0.75);text-decoration:none;font-size:12px;letter-spacing:0.1em;text-transform:uppercase;">Services</a>
    <a href="#" style="color:rgba(255,255,255,0.75);text-decoration:none;font-size:12px;letter-spacing:0.1em;text-transform:uppercase;">Contact</a>
  </nav>
</header>`,
  },
  {
    id: 'header0004',
    label: 'Glass Dark',
    thumbType: 'header',
    html: `<header style="background:rgba(10,10,20,0.95);backdrop-filter:blur(12px);padding:16px 48px;display:flex;align-items:center;gap:40px;border-bottom:1px solid rgba(255,255,255,0.08);">
  <div style="color:#fff;font-size:18px;font-weight:800;letter-spacing:-0.5px;flex-shrink:0;">B<span style="color:${T.indigo400};">.</span></div>
  <nav style="display:flex;gap:24px;flex:1;">
    <a href="#" style="color:rgba(255,255,255,0.6);text-decoration:none;font-size:13px;">首頁</a>
    <a href="#" style="color:rgba(255,255,255,0.6);text-decoration:none;font-size:13px;">服務</a>
    <a href="#" style="color:rgba(255,255,255,0.6);text-decoration:none;font-size:13px;">作品</a>
    <a href="#" style="color:rgba(255,255,255,0.6);text-decoration:none;font-size:13px;">關於</a>
  </nav>
  <div style="display:flex;gap:8px;">
    <button style="background:transparent;color:rgba(255,255,255,0.6);border:1px solid rgba(255,255,255,0.15);padding:8px 18px;border-radius:6px;font-size:13px;cursor:pointer;">登入</button>
    <button style="background:${T.gradIndigo};color:#fff;border:none;padding:8px 18px;border-radius:6px;font-size:13px;font-weight:600;cursor:pointer;">免費試用</button>
  </div>
</header>`,
  },
];
