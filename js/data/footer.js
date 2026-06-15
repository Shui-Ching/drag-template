import { T } from './tokens.js';

export default [
  {
    id: 'footer0001',
    label: '4-Col Footer',
    thumbType: 'footer',
    html: `<footer style="background:${T.slate900};padding:64px 48px 32px;font-family:${T.font};">
  <div style="display:grid;grid-template-columns:1.5fr 1fr 1fr 1fr;gap:40px;margin-bottom:48px;">
    <div>
      <div style="font-size:18px;font-weight:800;color:#fff;margin-bottom:12px;">Brand.</div>
      <p style="font-size:13px;color:${T.slate600};line-height:1.8;margin-bottom:20px;">為每一個有夢想的團隊，打造最好的工具。</p>
      <div style="display:flex;gap:12px;">
        <div style="width:32px;height:32px;background:rgba(255,255,255,0.07);border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:15px;">𝕏</div>
        <div style="width:32px;height:32px;background:rgba(255,255,255,0.07);border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:15px;">in</div>
        <div style="width:32px;height:32px;background:rgba(255,255,255,0.07);border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:15px;">gh</div>
      </div>
    </div>
    <div>
      <div style="font-size:12px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:${T.slate500};margin-bottom:16px;">產品</div>
      <div style="display:flex;flex-direction:column;gap:10px;">
        <a href="#" style="color:${T.slate400};text-decoration:none;font-size:13px;">功能介紹</a>
        <a href="#" style="color:${T.slate400};text-decoration:none;font-size:13px;">方案價格</a>
        <a href="#" style="color:${T.slate400};text-decoration:none;font-size:13px;">更新日誌</a>
        <a href="#" style="color:${T.slate400};text-decoration:none;font-size:13px;">API 文件</a>
      </div>
    </div>
    <div>
      <div style="font-size:12px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:${T.slate500};margin-bottom:16px;">公司</div>
      <div style="display:flex;flex-direction:column;gap:10px;">
        <a href="#" style="color:${T.slate400};text-decoration:none;font-size:13px;">關於我們</a>
        <a href="#" style="color:${T.slate400};text-decoration:none;font-size:13px;">部落格</a>
        <a href="#" style="color:${T.slate400};text-decoration:none;font-size:13px;">徵才資訊</a>
        <a href="#" style="color:${T.slate400};text-decoration:none;font-size:13px;">新聞中心</a>
      </div>
    </div>
    <div>
      <div style="font-size:12px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:${T.slate500};margin-bottom:16px;">支援</div>
      <div style="display:flex;flex-direction:column;gap:10px;">
        <a href="#" style="color:${T.slate400};text-decoration:none;font-size:13px;">說明中心</a>
        <a href="#" style="color:${T.slate400};text-decoration:none;font-size:13px;">聯絡客服</a>
        <a href="#" style="color:${T.slate400};text-decoration:none;font-size:13px;">服務狀態</a>
        <a href="#" style="color:${T.slate400};text-decoration:none;font-size:13px;">社群論壇</a>
      </div>
    </div>
  </div>
  <div style="border-top:1px solid rgba(255,255,255,0.06);padding-top:24px;display:flex;justify-content:space-between;align-items:center;">
    <span style="font-size:12px;color:${T.slate700};">© 2024 Brand. All rights reserved.</span>
    <div style="display:flex;gap:20px;">
      <a href="#" style="font-size:12px;color:${T.slate700};text-decoration:none;">隱私政策</a>
      <a href="#" style="font-size:12px;color:${T.slate700};text-decoration:none;">服務條款</a>
    </div>
  </div>
</footer>`,
  },
  {
    id: 'footer0002',
    label: 'Simple Center',
    thumbType: 'footer',
    html: `<footer style="background:#fff;padding:40px 48px;text-align:center;font-family:${T.font};border-top:1px solid #e5e7eb;">
  <div style="font-size:16px;font-weight:800;color:#0f172a;margin-bottom:20px;">Brand.</div>
  <nav style="display:flex;gap:28px;justify-content:center;margin-bottom:24px;">
    <a href="#" style="font-size:13px;color:#6b7280;text-decoration:none;">關於</a>
    <a href="#" style="font-size:13px;color:#6b7280;text-decoration:none;">服務</a>
    <a href="#" style="font-size:13px;color:#6b7280;text-decoration:none;">作品</a>
    <a href="#" style="font-size:13px;color:#6b7280;text-decoration:none;">部落格</a>
    <a href="#" style="font-size:13px;color:#6b7280;text-decoration:none;">聯絡</a>
  </nav>
  <p style="font-size:12px;color:#9ca3af;">© 2024 Brand. Made with ♥ in Taiwan</p>
</footer>`,
  },
  {
    id: 'footer0003',
    label: 'Dark + Newsletter',
    thumbType: 'footer',
    html: `<footer style="background:#09090b;padding:56px 48px 28px;font-family:${T.font};">
  <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:40px;margin-bottom:48px;flex-wrap:wrap;">
    <div style="max-width:280px;">
      <div style="font-size:18px;font-weight:900;color:#fff;margin-bottom:12px;">★ Brand</div>
      <p style="font-size:13px;color:#52525b;line-height:1.8;margin-bottom:20px;">訂閱我們，獲取最新產品資訊與行業洞察。</p>
      <div style="display:flex;gap:0;">
        <input type="email" placeholder="your@email.com" style="flex:1;padding:10px 14px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.08);border-right:none;border-radius:6px 0 0 6px;color:#a1a1aa;font-size:13px;outline:none;">
        <button style="background:${T.indigo500};color:#fff;border:none;padding:10px 16px;border-radius:0 6px 6px 0;font-size:13px;font-weight:600;cursor:pointer;">訂閱</button>
      </div>
    </div>
    <div style="display:flex;gap:48px;">
      <div>
        <div style="font-size:11px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#3f3f46;margin-bottom:14px;">連結</div>
        <div style="display:flex;flex-direction:column;gap:10px;">
          <a href="#" style="color:#71717a;text-decoration:none;font-size:13px;">首頁</a>
          <a href="#" style="color:#71717a;text-decoration:none;font-size:13px;">作品集</a>
          <a href="#" style="color:#71717a;text-decoration:none;font-size:13px;">服務</a>
          <a href="#" style="color:#71717a;text-decoration:none;font-size:13px;">聯絡</a>
        </div>
      </div>
      <div>
        <div style="font-size:11px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#3f3f46;margin-bottom:14px;">法律</div>
        <div style="display:flex;flex-direction:column;gap:10px;">
          <a href="#" style="color:#71717a;text-decoration:none;font-size:13px;">隱私政策</a>
          <a href="#" style="color:#71717a;text-decoration:none;font-size:13px;">服務條款</a>
          <a href="#" style="color:#71717a;text-decoration:none;font-size:13px;">Cookie</a>
        </div>
      </div>
    </div>
  </div>
  <div style="border-top:1px solid rgba(255,255,255,0.05);padding-top:20px;">
    <span style="font-size:12px;color:#27272a;">© 2024 Brand Inc. — Built in Taiwan 🇹🇼</span>
  </div>
</footer>`,
  },
];
