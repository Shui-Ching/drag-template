import { T } from './tokens.js';

export default [
  {
    id: 'columns0001',
    label: '3-Col Features',
    thumbType: 'columns',
    thumbCols: 3,
    html: `<section style="background:#fff;padding:72px 48px;">
  <div style="text-align:center;margin-bottom:56px;">
    <h2 style="font-size:36px;font-weight:900;color:${T.slate900};letter-spacing:-0.5px;margin-bottom:12px;">核心功能</h2>
    <p style="font-size:16px;color:${T.slate500};max-width:500px;margin:0 auto;line-height:1.7;">我們提供一站式解決方案，讓您的工作效率倍增。</p>
  </div>
  <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:28px;">
    <div style="padding:32px;background:${T.slate50};border-radius:12px;border:1px solid ${T.slate200};">
      <div style="width:48px;height:48px;background:#dbeafe;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:22px;margin-bottom:20px;">⚡</div>
      <h3 style="font-size:18px;font-weight:700;color:${T.slate900};margin-bottom:10px;">極速部署</h3>
      <p style="font-size:16px;color:${T.slate500};line-height:1.7;">從設計到上線，只需幾分鐘。內建 CI/CD 流程，讓您專注於創造價值。</p>
    </div>
    <div style="padding:32px;background:${T.slate50};border-radius:12px;border:1px solid ${T.slate200};">
      <div style="width:48px;height:48px;background:#dcfce7;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:22px;margin-bottom:20px;">🛡</div>
      <h3 style="font-size:18px;font-weight:700;color:${T.slate900};margin-bottom:10px;">企業級安全</h3>
      <p style="font-size:16px;color:${T.slate500};line-height:1.7;">SOC 2 Type II 認證，端對端加密，保護您的資料安全無虞。</p>
    </div>
    <div style="padding:32px;background:${T.slate50};border-radius:12px;border:1px solid ${T.slate200};">
      <div style="width:48px;height:48px;background:#fae8ff;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:22px;margin-bottom:20px;">📊</div>
      <h3 style="font-size:18px;font-weight:700;color:${T.slate900};margin-bottom:10px;">即時分析</h3>
      <p style="font-size:16px;color:${T.slate500};line-height:1.7;">深度數據洞察，幫助您做出更明智的商業決策，持續優化成長。</p>
    </div>
  </div>
</section>`,
  },
  {
    id: 'columns0002',
    label: '2-Col Image+Text',
    thumbType: 'columns',
    thumbCols: 2,
    html: `<section style="background:#fff;padding:72px 48px;display:flex;align-items:center;gap:64px;">
  <div style="flex:1;background:linear-gradient(135deg,#f0f9ff,#e0f2fe);border-radius:16px;height:340px;display:flex;align-items:center;justify-content:center;">
    <div style="width:200px;height:140px;background:rgba(255,255,255,0.8);border-radius:12px;box-shadow:0 8px 32px rgba(0,0,0,0.1);display:flex;align-items:center;justify-content:center;flex-direction:column;gap:10px;">
      <div style="width:48px;height:48px;background:linear-gradient(135deg,${T.sky500},${T.indigo500});border-radius:10px;"></div>
      <div style="width:100px;height:6px;background:${T.slate200};border-radius:3px;"></div>
      <div style="width:70px;height:4px;background:${T.slate100};border-radius:2px;"></div>
    </div>
  </div>
  <div style="flex:1;">
    <div style="font-size:16px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:${T.sky500};margin-bottom:16px;">ABOUT US</div>
    <h2 style="font-size:38px;font-weight:900;color:${T.slate900};line-height:1.15;letter-spacing:-0.5px;margin-bottom:20px;">我們在乎<br>每一個細節</h2>
    <p style="font-size:16px;color:${T.slate500};line-height:1.8;margin-bottom:28px;">從第一個像素到最後一行程式碼，我們的團隊以工藝精神打磨每一個產品。</p>
    <div style="display:flex;flex-direction:column;gap:14px;margin-bottom:32px;">
      <div style="display:flex;align-items:center;gap:10px;font-size:16px;color:#374151;"><span style="color:${T.sky500};font-size:16px;">✓</span> 10 年以上產業深耕經驗</div>
      <div style="display:flex;align-items:center;gap:10px;font-size:16px;color:#374151;"><span style="color:${T.sky500};font-size:16px;">✓</span> 超過 500 間企業信任我們</div>
      <div style="display:flex;align-items:center;gap:10px;font-size:16px;color:#374151;"><span style="color:${T.sky500};font-size:16px;">✓</span> 24/7 全天候技術支援</div>
    </div>
    <button style="background:${T.slate900};color:#fff;border:none;padding:13px 28px;border-radius:8px;font-size:16px;font-weight:600;cursor:pointer;">認識我們的團隊</button>
  </div>
</section>`,
  },
  {
    id: 'columns0003',
    label: '4-Col Stats',
    thumbType: 'columns',
    thumbCols: 4,
    html: `<section style="background:${T.slate900};padding:72px 48px;">
  <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:24px;">
    <div style="text-align:center;padding:32px 16px;">
      <div style="font-size:36px;margin-bottom:16px;">🌐</div>
      <div style="font-size:28px;font-weight:900;color:#fff;margin-bottom:6px;">128</div>
      <div style="font-size:16px;color:${T.slate500};font-weight:500;">全球節點數量</div>
    </div>
    <div style="text-align:center;padding:32px 16px;">
      <div style="font-size:36px;margin-bottom:16px;">⚡</div>
      <div style="font-size:28px;font-weight:900;color:#fff;margin-bottom:6px;">99.9%</div>
      <div style="font-size:16px;color:${T.slate500};font-weight:500;">服務可用率</div>
    </div>
    <div style="text-align:center;padding:32px 16px;">
      <div style="font-size:36px;margin-bottom:16px;">👥</div>
      <div style="font-size:28px;font-weight:900;color:#fff;margin-bottom:6px;">50K+</div>
      <div style="font-size:16px;color:${T.slate500};font-weight:500;">活躍用戶數</div>
    </div>
    <div style="text-align:center;padding:32px 16px;">
      <div style="font-size:36px;margin-bottom:16px;">⭐</div>
      <div style="font-size:28px;font-weight:900;color:#fff;margin-bottom:6px;">4.9</div>
      <div style="font-size:16px;color:${T.slate500};font-weight:500;">平均用戶評分</div>
    </div>
  </div>
</section>`,
  },
  {
    id: 'columns0004',
    label: 'Pricing 3-Col',
    thumbType: 'columns',
    thumbCols: 3,
    html: `<section style="background:${T.slate50};padding:72px 48px;">
  <div style="text-align:center;margin-bottom:48px;">
    <h2 style="font-size:36px;font-weight:900;color:${T.slate900};letter-spacing:-0.5px;margin-bottom:12px;">選擇適合您的方案</h2>
    <p style="font-size:16px;color:${T.slate500};">所有方案皆含 14 天免費試用，無需信用卡。</p>
  </div>
  <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:24px;max-width:900px;margin:0 auto;">
    <div style="background:#fff;border:1px solid ${T.slate200};border-radius:16px;padding:32px 24px;">
      <div style="font-size:16px;font-weight:600;color:${T.slate500};text-transform:uppercase;letter-spacing:0.08em;margin-bottom:16px;">入門</div>
      <div style="font-size:40px;font-weight:900;color:${T.slate900};margin-bottom:4px;">$0</div>
      <div style="font-size:16px;color:${T.slate400};margin-bottom:28px;">永久免費</div>
      <div style="display:flex;flex-direction:column;gap:10px;margin-bottom:28px;font-size:16px;color:${T.slate500};">
        <div>✓ 3 個專案</div><div>✓ 基本分析</div><div>✓ 社群支援</div>
      </div>
      <button style="width:100%;background:${T.slate100};color:${T.slate900};border:none;padding:12px;border-radius:8px;font-size:16px;font-weight:600;cursor:pointer;">開始使用</button>
    </div>
    <div style="background:${T.slate900};border:1px solid #1e293b;border-radius:16px;padding:32px 24px;position:relative;">
      <div style="position:absolute;top:-12px;left:50%;transform:translateX(-50%);background:${T.gradIndigo};color:#fff;font-size:16px;font-weight:700;padding:4px 14px;border-radius:999px;white-space:nowrap;">最受歡迎</div>
      <div style="font-size:16px;font-weight:600;color:${T.indigo400};text-transform:uppercase;letter-spacing:0.08em;margin-bottom:16px;">專業</div>
      <div style="font-size:40px;font-weight:900;color:#fff;margin-bottom:4px;">$29</div>
      <div style="font-size:16px;color:${T.slate600};margin-bottom:28px;">/月</div>
      <div style="display:flex;flex-direction:column;gap:10px;margin-bottom:28px;font-size:16px;color:${T.slate400};">
        <div>✓ 無限專案</div><div>✓ 進階分析</div><div>✓ 優先支援</div>
      </div>
      <button style="width:100%;background:${T.gradIndigo};color:#fff;border:none;padding:12px;border-radius:8px;font-size:16px;font-weight:700;cursor:pointer;">立即升級</button>
    </div>
    <div style="background:#fff;border:1px solid ${T.slate200};border-radius:16px;padding:32px 24px;">
      <div style="font-size:16px;font-weight:600;color:${T.slate500};text-transform:uppercase;letter-spacing:0.08em;margin-bottom:16px;">企業</div>
      <div style="font-size:40px;font-weight:900;color:${T.slate900};margin-bottom:4px;">客製</div>
      <div style="font-size:16px;color:${T.slate400};margin-bottom:28px;">聯絡我們</div>
      <div style="display:flex;flex-direction:column;gap:10px;margin-bottom:28px;font-size:16px;color:${T.slate500};">
        <div>✓ 自訂整合</div><div>✓ SLA 保證</div><div>✓ 專屬客服</div>
      </div>
      <button style="width:100%;background:${T.slate100};color:${T.slate900};border:none;padding:12px;border-radius:8px;font-size:16px;font-weight:600;cursor:pointer;">聯絡業務</button>
    </div>
  </div>
</section>`,
  },
  {
    id: 'columns0005',
    label: 'News List 5-Row',
    thumbType: 'columns',
    thumbCols: 1,
    html: `<section style="background:#f4f5f6;padding:100px 0;font-family:'Noto Sans TC',sans-serif;">
  <div style="max-width:1200px;margin:0 auto;padding:0 48px;">
  <h2 style="text-align:center;font-size:28px;font-weight:500;color:#000;margin:0 0 64px;letter-spacing:0;">新聞與動態</h2>
  <div style="display:flex;flex-direction:column;gap:24px;">
    <div style="background:#fff;border-radius:12px;padding:24px;display:flex;align-items:center;gap:40px;">
      <div style="width:320px;min-width:320px;height:200px;background:#f4f5f6;border-radius:8px;display:flex;align-items:center;justify-content:center;">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#b0b8c1" viewBox="0 0 16 16"><path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/><path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1z"/></svg>
      </div>
      <div style="flex:1;display:flex;flex-direction:column;gap:16px;min-width:0;">
        <p style="font-size:16px;font-weight:500;color:#000;margin:0;">創新設計引領未來生活空間</p>
        <p style="font-size:14px;font-weight:400;color:#767d86;line-height:1.5;margin:0;">我們致力於為每一位客戶提供最卓越的設計解決方案。透過深厚的技術積累與前瞻性的美學眼光，我們不僅創造空間，更在重塑生活方式。</p>
        <p style="font-size:14px;color:#767d86;margin:0;">發佈於 2024年 5月 20日</p>
      </div>
    </div>
    <div style="background:#fff;border-radius:12px;padding:24px;display:flex;align-items:center;gap:40px;">
      <div style="width:320px;min-width:320px;height:200px;background:#f4f5f6;border-radius:8px;display:flex;align-items:center;justify-content:center;">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#b0b8c1" viewBox="0 0 16 16"><path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/><path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1z"/></svg>
      </div>
      <div style="flex:1;display:flex;flex-direction:column;gap:16px;min-width:0;">
        <p style="font-size:16px;font-weight:500;color:#000;margin:0;">永續建築打造綠色城市未來</p>
        <p style="font-size:14px;font-weight:400;color:#767d86;line-height:1.5;margin:0;">面對氣候變遷的挑戰，我們積極導入綠建築標準，運用再生材料與節能技術，為客戶打造兼具美感與環保效益的永續空間。</p>
        <p style="font-size:14px;color:#767d86;margin:0;">發佈於 2024年 4月 15日</p>
      </div>
    </div>
    <div style="background:#fff;border-radius:12px;padding:24px;display:flex;align-items:center;gap:40px;">
      <div style="width:320px;min-width:320px;height:200px;background:#f4f5f6;border-radius:8px;display:flex;align-items:center;justify-content:center;">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#b0b8c1" viewBox="0 0 16 16"><path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/><path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1z"/></svg>
      </div>
      <div style="flex:1;display:flex;flex-direction:column;gap:16px;min-width:0;">
        <p style="font-size:16px;font-weight:500;color:#000;margin:0;">智慧辦公空間重新定義工作體驗</p>
        <p style="font-size:14px;font-weight:400;color:#767d86;line-height:1.5;margin:0;">結合 IoT 感測技術與人因工學設計，我們協助企業打造自動化調節照明、溫度與音量的智慧工作環境，讓員工效率與舒適度同步提升。</p>
        <p style="font-size:14px;color:#767d86;margin:0;">發佈於 2024年 3月 8日</p>
      </div>
    </div>
    <div style="background:#fff;border-radius:12px;padding:24px;display:flex;align-items:center;gap:40px;">
      <div style="width:320px;min-width:320px;height:200px;background:#f4f5f6;border-radius:8px;display:flex;align-items:center;justify-content:center;">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#b0b8c1" viewBox="0 0 16 16"><path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/><path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1z"/></svg>
      </div>
      <div style="flex:1;display:flex;flex-direction:column;gap:16px;min-width:0;">
        <p style="font-size:16px;font-weight:500;color:#000;margin:0;">獲頒年度最佳室內設計大獎</p>
        <p style="font-size:14px;font-weight:400;color:#767d86;line-height:1.5;margin:0;">本公司榮獲 2024 年亞太室內設計協會頒發的年度大獎，表彰我們在商業空間設計領域的突破性創作與對品質標準的堅持。</p>
        <p style="font-size:14px;color:#767d86;margin:0;">發佈於 2024年 2月 22日</p>
      </div>
    </div>
    <div style="background:#fff;border-radius:12px;padding:24px;display:flex;align-items:center;gap:40px;">
      <div style="width:320px;min-width:320px;height:200px;background:#f4f5f6;border-radius:8px;display:flex;align-items:center;justify-content:center;">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#b0b8c1" viewBox="0 0 16 16"><path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/><path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1z"/></svg>
      </div>
      <div style="flex:1;display:flex;flex-direction:column;gap:16px;min-width:0;">
        <p style="font-size:16px;font-weight:500;color:#000;margin:0;">新材料研究中心正式啟用</p>
        <p style="font-size:14px;font-weight:400;color:#767d86;line-height:1.5;margin:0;">我們投資建立的新材料研究中心已於本月正式啟用，將專注探索生物基複合材料與循環再利用工法，推動設計產業進入下一個里程碑。</p>
        <p style="font-size:14px;color:#767d86;margin:0;">發佈於 2024年 1月 10日</p>
      </div>
    </div>
  </div>
  </div>
</section>`,
  },
];
