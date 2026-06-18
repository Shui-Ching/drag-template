import { T } from './tokens.js';

export default [
  {
    id: 'footer0001',
    label: '4-Col Footer',
    thumbType: 'footer',
    html: `<footer style="background:${T.slate900};padding:64px 48px 32px;">
  <div style="display:grid;grid-template-columns:1.5fr 1fr 1fr 1fr;gap:40px;margin-bottom:48px;">
    <div>
      <div style="font-size:18px;font-weight:800;color:#fff;margin-bottom:12px;">Brand.</div>
      <p style="font-size:16px;color:${T.slate600};line-height:1.8;margin-bottom:20px;">為每一個有夢想的團隊，打造最好的工具。</p>
      <div style="display:flex;gap:12px;">
        <div style="width:32px;height:32px;background:rgba(255,255,255,0.07);border-radius:6px;display:flex;align-items:center;justify-content:center;"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="#94a3b8" viewBox="0 0 16 16"><path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/></svg></div>
        <div style="width:32px;height:32px;background:rgba(255,255,255,0.07);border-radius:6px;display:flex;align-items:center;justify-content:center;"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="#94a3b8" viewBox="0 0 16 16"><path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/></svg></div>
        <div style="width:32px;height:32px;background:rgba(255,255,255,0.07);border-radius:6px;display:flex;align-items:center;justify-content:center;"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="#94a3b8" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/></svg></div>
      </div>
    </div>
    <div>
      <div style="font-size:16px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:${T.slate500};margin-bottom:16px;">產品</div>
      <div style="display:flex;flex-direction:column;gap:10px;">
        <a href="#" style="color:${T.slate400};text-decoration:none;font-size:16px;">功能介紹</a>
        <a href="#" style="color:${T.slate400};text-decoration:none;font-size:16px;">方案價格</a>
        <a href="#" style="color:${T.slate400};text-decoration:none;font-size:16px;">更新日誌</a>
        <a href="#" style="color:${T.slate400};text-decoration:none;font-size:16px;">API 文件</a>
      </div>
    </div>
    <div>
      <div style="font-size:16px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:${T.slate500};margin-bottom:16px;">公司</div>
      <div style="display:flex;flex-direction:column;gap:10px;">
        <a href="#" style="color:${T.slate400};text-decoration:none;font-size:16px;">關於我們</a>
        <a href="#" style="color:${T.slate400};text-decoration:none;font-size:16px;">部落格</a>
        <a href="#" style="color:${T.slate400};text-decoration:none;font-size:16px;">徵才資訊</a>
        <a href="#" style="color:${T.slate400};text-decoration:none;font-size:16px;">新聞中心</a>
      </div>
    </div>
    <div>
      <div style="font-size:16px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:${T.slate500};margin-bottom:16px;">支援</div>
      <div style="display:flex;flex-direction:column;gap:10px;">
        <a href="#" style="color:${T.slate400};text-decoration:none;font-size:16px;">說明中心</a>
        <a href="#" style="color:${T.slate400};text-decoration:none;font-size:16px;">聯絡客服</a>
        <a href="#" style="color:${T.slate400};text-decoration:none;font-size:16px;">服務狀態</a>
        <a href="#" style="color:${T.slate400};text-decoration:none;font-size:16px;">社群論壇</a>
      </div>
    </div>
  </div>
  <div style="border-top:1px solid rgba(255,255,255,0.06);padding-top:24px;display:flex;justify-content:space-between;align-items:center;">
    <span style="font-size:16px;color:${T.slate700};">© 2024 Brand. All rights reserved.</span>
    <div style="display:flex;gap:20px;">
      <a href="#" style="font-size:16px;color:${T.slate700};text-decoration:none;">隱私政策</a>
      <a href="#" style="font-size:16px;color:${T.slate700};text-decoration:none;">服務條款</a>
    </div>
  </div>
</footer>`,
  },
  {
    id: 'footer0002',
    label: 'Simple Center',
    thumbType: 'footer',
    html: `<footer style="background:#fff;padding:40px 48px;text-align:center;border-top:1px solid #e5e7eb;">
  <div style="font-size:16px;font-weight:800;color:#0f172a;margin-bottom:20px;">Brand.</div>
  <nav style="display:flex;gap:28px;justify-content:center;margin-bottom:24px;">
    <a href="#" style="font-size:16px;color:#6b7280;text-decoration:none;">關於</a>
    <a href="#" style="font-size:16px;color:#6b7280;text-decoration:none;">服務</a>
    <a href="#" style="font-size:16px;color:#6b7280;text-decoration:none;">作品</a>
    <a href="#" style="font-size:16px;color:#6b7280;text-decoration:none;">部落格</a>
    <a href="#" style="font-size:16px;color:#6b7280;text-decoration:none;">聯絡</a>
  </nav>
  <p style="font-size:16px;color:#9ca3af;">© 2024 Brand. Made with <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="#9ca3af" viewBox="0 0 16 16" style="vertical-align:-1px;"><path d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/></svg> in Taiwan</p>
</footer>`,
  },
  {
    id: 'footer0003',
    label: 'Dark + Newsletter',
    thumbType: 'footer',
    html: `<footer style="background:#09090b;padding:56px 48px 28px;">
  <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:40px;margin-bottom:48px;flex-wrap:wrap;">
    <div style="max-width:280px;">
      <div style="font-size:18px;font-weight:900;color:#fff;margin-bottom:12px;display:flex;align-items:center;gap:6px;"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/></svg> Brand</div>
      <p style="font-size:16px;color:#52525b;line-height:1.8;margin-bottom:20px;">訂閱我們，獲取最新產品資訊與行業洞察。</p>
      <div style="display:flex;gap:0;">
        <input type="email" placeholder="your@email.com" style="flex:1;padding:10px 14px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.08);border-right:none;border-radius:6px 0 0 6px;color:#a1a1aa;font-size:16px;outline:none;">
        <button style="background:${T.indigo500};color:#fff;border:none;padding:10px 16px;border-radius:0 6px 6px 0;font-size:16px;font-weight:600;cursor:pointer;">訂閱</button>
      </div>
    </div>
    <div style="display:flex;gap:48px;">
      <div>
        <div style="font-size:16px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#3f3f46;margin-bottom:14px;">連結</div>
        <div style="display:flex;flex-direction:column;gap:10px;">
          <a href="#" style="color:#71717a;text-decoration:none;font-size:16px;">首頁</a>
          <a href="#" style="color:#71717a;text-decoration:none;font-size:16px;">作品集</a>
          <a href="#" style="color:#71717a;text-decoration:none;font-size:16px;">服務</a>
          <a href="#" style="color:#71717a;text-decoration:none;font-size:16px;">聯絡</a>
        </div>
      </div>
      <div>
        <div style="font-size:16px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#3f3f46;margin-bottom:14px;">法律</div>
        <div style="display:flex;flex-direction:column;gap:10px;">
          <a href="#" style="color:#71717a;text-decoration:none;font-size:16px;">隱私政策</a>
          <a href="#" style="color:#71717a;text-decoration:none;font-size:16px;">服務條款</a>
          <a href="#" style="color:#71717a;text-decoration:none;font-size:16px;">Cookie</a>
        </div>
      </div>
    </div>
  </div>
  <div style="border-top:1px solid rgba(255,255,255,0.05);padding-top:20px;">
    <span style="font-size:16px;color:#27272a;">© 2024 Brand Inc. — Built in Taiwan</span>
  </div>
</footer>`,
  },
];
