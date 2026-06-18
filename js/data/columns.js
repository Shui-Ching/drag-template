import { T } from './tokens.js';

export default [
  {
    id: 'columns0001',
    label: '3-Col Features',
    thumbType: 'columns',
    thumbCols: 3,
    html: `<section style="background:#f4f5f6;padding:100px 0;">
  <div style="max-width:1200px;margin:0 auto;padding:0 48px;">
    <h2 style="text-align:center;font-size:28px;font-weight:500;color:${T.slate900};margin:0 0 64px;letter-spacing:0;">核心功能</h2>
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:28px;">
      <div style="padding:32px;background:#fff;border-radius:12px;">
        <div style="width:48px;height:48px;background:#dbeafe;border-radius:10px;display:flex;align-items:center;justify-content:center;margin-bottom:20px;">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="${T.blue500}" viewBox="0 0 16 16"><path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z"/></svg>
        </div>
        <h3 style="font-size:16px;font-weight:500;color:${T.slate900};margin:0 0 12px;">極速部署</h3>
        <p style="font-size:14px;color:${T.slate500};line-height:1.5;margin:0;">從設計到上線，只需幾分鐘。內建 CI/CD 流程，讓您專注於創造價值。</p>
      </div>
      <div style="padding:32px;background:#fff;border-radius:12px;">
        <div style="width:48px;height:48px;background:#dbeafe;border-radius:10px;display:flex;align-items:center;justify-content:center;margin-bottom:20px;">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="${T.blue500}" viewBox="0 0 16 16"><path d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.8 11.8 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7 7 0 0 0 1.048-.625 11.8 11.8 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.54 1.54 0 0 0-1.044-1.263 63 63 0 0 0-2.887-.87C9.843.266 8.69 0 8 0m2.146 5.146a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793z"/></svg>
        </div>
        <h3 style="font-size:16px;font-weight:500;color:${T.slate900};margin:0 0 12px;">企業級安全</h3>
        <p style="font-size:14px;color:${T.slate500};line-height:1.5;margin:0;">SOC 2 Type II 認證，端對端加密，保護您的資料安全無虞。</p>
      </div>
      <div style="padding:32px;background:#fff;border-radius:12px;">
        <div style="width:48px;height:48px;background:#dbeafe;border-radius:10px;display:flex;align-items:center;justify-content:center;margin-bottom:20px;">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="${T.blue500}" viewBox="0 0 16 16"><path d="M1 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm5-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1z"/></svg>
        </div>
        <h3 style="font-size:16px;font-weight:500;color:${T.slate900};margin:0 0 12px;">即時分析</h3>
        <p style="font-size:14px;color:${T.slate500};line-height:1.5;margin:0;">深度數據洞察，幫助您做出更明智的商業決策，持續優化成長。</p>
      </div>
    </div>
  </div>
</section>`,
  },
  {
    id: 'columns0002',
    label: '2-Col Image+Text',
    thumbType: 'columns',
    thumbCols: 2,
    html: `<section style="background:#fff;padding:100px 0;">
  <div style="max-width:1200px;margin:0 auto;padding:0 48px;display:flex;align-items:center;gap:64px;">
    <div style="flex:1;background:#f4f5f6;border-radius:16px;height:340px;display:flex;align-items:center;justify-content:center;">
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#b0b8c1" viewBox="0 0 16 16"><path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/><path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1z"/></svg>
    </div>
    <div style="flex:1;">
      <div style="font-size:16px;font-weight:500;letter-spacing:0.12em;text-transform:uppercase;color:${T.sky500};margin-bottom:16px;">ABOUT US</div>
      <h2 style="font-size:28px;font-weight:500;color:${T.slate900};line-height:1.15;letter-spacing:-0.5px;margin-bottom:20px;">我們在乎每一個細節</h2>
      <p style="font-size:16px;color:${T.slate500};line-height:1.8;margin-bottom:28px;">從第一個像素到最後一行程式碼，我們的團隊以工藝精神打磨每一個產品。</p>
      <div style="display:flex;flex-direction:column;gap:14px;margin-bottom:32px;">
        <div style="display:flex;align-items:center;gap:10px;font-size:16px;color:${T.slate700};"><span style="color:${T.sky500};font-size:16px;">✓</span> 10 年以上產業深耕經驗</div>
        <div style="display:flex;align-items:center;gap:10px;font-size:16px;color:${T.slate700};"><span style="color:${T.sky500};font-size:16px;">✓</span> 超過 500 間企業信任我們</div>
        <div style="display:flex;align-items:center;gap:10px;font-size:16px;color:${T.slate700};"><span style="color:${T.sky500};font-size:16px;">✓</span> 24/7 全天候技術支援</div>
      </div>
      <button style="background:${T.slate900};color:#fff;border:none;padding:13px 28px;border-radius:8px;font-size:16px;font-weight:600;cursor:pointer;">認識我們的團隊</button>
    </div>
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
      <div style="margin-bottom:16px;display:flex;justify-content:center;"><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="#fff" viewBox="0 0 16 16"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A8 8 0 0 0 5.145 4H7.5zM4.09 4a9.3 9.3 0 0 1 .64-1.539 7 7 0 0 1 .597-.933A7.03 7.03 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a7 7 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.5 12.5 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12q.208.58.468 1.068c.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a7 7 0 0 1-.597-.933A9.3 9.3 0 0 1 4.09 12H2.255a7 7 0 0 0 3.072 2.472M3.82 11a13.7 13.7 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm6.853 3.472A7 7 0 0 0 13.745 12H11.91a9.3 9.3 0 0 1-.64 1.539 7 7 0 0 1-.597.933M8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855q.26-.487.468-1.068zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.7 13.7 0 0 1-.312 2.5m2.802-3.5a7 7 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7 7 0 0 0-3.072-2.472c.218.284.418.598.597.933M10.855 4a8 8 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4z"/></svg></div>
      <div style="font-size:28px;font-weight:900;color:#fff;margin-bottom:6px;">128</div>
      <div style="font-size:16px;color:${T.slate500};font-weight:500;">全球節點數量</div>
    </div>
    <div style="text-align:center;padding:32px 16px;">
      <div style="margin-bottom:16px;display:flex;justify-content:center;"><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="#fff" viewBox="0 0 16 16"><path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z"/></svg></div>
      <div style="font-size:28px;font-weight:900;color:#fff;margin-bottom:6px;">99.9%</div>
      <div style="font-size:16px;color:${T.slate500};font-weight:500;">服務可用率</div>
    </div>
    <div style="text-align:center;padding:32px 16px;">
      <div style="margin-bottom:16px;display:flex;justify-content:center;"><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="#fff" viewBox="0 0 16 16"><path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/></svg></div>
      <div style="font-size:28px;font-weight:900;color:#fff;margin-bottom:6px;">50K+</div>
      <div style="font-size:16px;color:${T.slate500};font-weight:500;">活躍用戶數</div>
    </div>
    <div style="text-align:center;padding:32px 16px;">
      <div style="margin-bottom:16px;display:flex;justify-content:center;"><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="#fff" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/></svg></div>
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
    html: `<section style="background:${T.slate50};padding:100px 0;">
  <div style="max-width:1200px;margin:0 auto;padding:0 48px;">
    <div style="text-align:center;margin-bottom:64px;">
      <span style="display:inline-block;background:#dbeafe;color:#3b82f6;font-size:14px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;padding:6px 16px;border-radius:999px;margin-bottom:20px;">方案定價</span>
      <h2 style="font-size:40px;font-weight:900;color:${T.slate900};letter-spacing:-0.5px;margin:0 0 14px;">選擇適合您的方案</h2>
      <p style="font-size:16px;color:${T.slate500};margin:0;">所有方案皆含 14 天免費試用，無需信用卡。隨時升級或取消。</p>
    </div>
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:24px;align-items:start;">
      <div style="background:#fff;border:1px solid ${T.slate200};border-radius:20px;padding:36px 28px;">
        <div style="font-size:12px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:${T.slate400};margin-bottom:24px;">入門版</div>
        <div style="display:flex;align-items:baseline;gap:2px;margin-bottom:6px;">
          <span style="font-size:20px;font-weight:700;color:${T.slate900};align-self:flex-start;padding-top:10px;">$</span>
          <span style="font-size:56px;font-weight:900;color:${T.slate900};line-height:1;letter-spacing:-2px;">0</span>
        </div>
        <div style="font-size:14px;color:${T.slate400};margin-bottom:32px;">永久免費，立即開始</div>
        <div style="height:1px;background:${T.slate100};margin-bottom:32px;"></div>
        <div style="display:flex;flex-direction:column;gap:14px;margin-bottom:40px;">
          <div style="display:flex;align-items:center;gap:10px;"><div style="width:20px;height:20px;min-width:20px;border-radius:50%;background:${T.slate100};display:flex;align-items:center;justify-content:center;"><svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" fill="${T.indigo500}" viewBox="0 0 16 16"><path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/></svg></div><span style="font-size:14px;color:${T.slate700};">最多 3 個專案</span></div>
          <div style="display:flex;align-items:center;gap:10px;"><div style="width:20px;height:20px;min-width:20px;border-radius:50%;background:${T.slate100};display:flex;align-items:center;justify-content:center;"><svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" fill="${T.indigo500}" viewBox="0 0 16 16"><path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/></svg></div><span style="font-size:14px;color:${T.slate700};">基本數據分析</span></div>
          <div style="display:flex;align-items:center;gap:10px;"><div style="width:20px;height:20px;min-width:20px;border-radius:50%;background:${T.slate100};display:flex;align-items:center;justify-content:center;"><svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" fill="${T.indigo500}" viewBox="0 0 16 16"><path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/></svg></div><span style="font-size:14px;color:${T.slate700};">社群論壇支援</span></div>
          <div style="display:flex;align-items:center;gap:10px;"><div style="width:20px;height:20px;min-width:20px;border-radius:50%;background:${T.slate100};display:flex;align-items:center;justify-content:center;"><svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" fill="${T.indigo500}" viewBox="0 0 16 16"><path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/></svg></div><span style="font-size:14px;color:${T.slate700};">5 GB 儲存空間</span></div>
        </div>
        <button style="width:100%;background:${T.slate100};color:${T.slate900};border:none;padding:14px;border-radius:10px;font-size:15px;font-weight:600;cursor:pointer;">免費開始使用</button>
      </div>
      <div style="background:#fff;border:2px solid ${T.indigo500};border-radius:20px;padding:36px 28px;box-shadow:0 20px 60px rgba(99,102,241,0.12);position:relative;">
        <div style="position:absolute;top:-14px;left:50%;transform:translateX(-50%);background:${T.gradIndigo};color:#fff;font-size:12px;font-weight:700;padding:5px 16px;border-radius:999px;white-space:nowrap;letter-spacing:0.05em;">最受歡迎</div>
        <div style="font-size:12px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:${T.indigo500};margin-bottom:24px;">專業版</div>
        <div style="display:flex;align-items:baseline;gap:2px;margin-bottom:6px;">
          <span style="font-size:20px;font-weight:700;color:${T.slate900};align-self:flex-start;padding-top:10px;">$</span>
          <span style="font-size:56px;font-weight:900;color:${T.slate900};line-height:1;letter-spacing:-2px;">29</span>
        </div>
        <div style="font-size:14px;color:${T.slate400};margin-bottom:32px;">每月 / 每位使用者</div>
        <div style="height:1px;background:#ede9fe;margin-bottom:32px;"></div>
        <div style="display:flex;flex-direction:column;gap:14px;margin-bottom:40px;">
          <div style="display:flex;align-items:center;gap:10px;"><div style="width:20px;height:20px;min-width:20px;border-radius:50%;background:#f1f5f9;display:flex;align-items:center;justify-content:center;"><svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" fill="${T.indigo500}" viewBox="0 0 16 16"><path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/></svg></div><span style="font-size:14px;color:${T.slate700};">無限專案數量</span></div>
          <div style="display:flex;align-items:center;gap:10px;"><div style="width:20px;height:20px;min-width:20px;border-radius:50%;background:#f1f5f9;display:flex;align-items:center;justify-content:center;"><svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" fill="${T.indigo500}" viewBox="0 0 16 16"><path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/></svg></div><span style="font-size:14px;color:${T.slate700};">進階分析與報表</span></div>
          <div style="display:flex;align-items:center;gap:10px;"><div style="width:20px;height:20px;min-width:20px;border-radius:50%;background:#f1f5f9;display:flex;align-items:center;justify-content:center;"><svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" fill="${T.indigo500}" viewBox="0 0 16 16"><path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/></svg></div><span style="font-size:14px;color:${T.slate700};">優先客服回覆</span></div>
          <div style="display:flex;align-items:center;gap:10px;"><div style="width:20px;height:20px;min-width:20px;border-radius:50%;background:#f1f5f9;display:flex;align-items:center;justify-content:center;"><svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" fill="${T.indigo500}" viewBox="0 0 16 16"><path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/></svg></div><span style="font-size:14px;color:${T.slate700};">100 GB 儲存空間</span></div>
          <div style="display:flex;align-items:center;gap:10px;"><div style="width:20px;height:20px;min-width:20px;border-radius:50%;background:#f1f5f9;display:flex;align-items:center;justify-content:center;"><svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" fill="${T.indigo500}" viewBox="0 0 16 16"><path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/></svg></div><span style="font-size:14px;color:${T.slate700};">API 存取權限</span></div>
        </div>
        <button style="width:100%;background:${T.gradIndigo};color:#fff;border:none;padding:14px;border-radius:10px;font-size:15px;font-weight:700;cursor:pointer;">立即升級專業版</button>
      </div>
      <div style="background:#fff;border:1px solid ${T.slate200};border-radius:20px;padding:36px 28px;">
        <div style="font-size:12px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:${T.slate400};margin-bottom:24px;">企業版</div>
        <div style="margin-bottom:6px;">
          <span style="font-size:36px;font-weight:900;color:${T.slate900};line-height:1;letter-spacing:-1px;">客製報價</span>
        </div>
        <div style="font-size:14px;color:${T.slate400};margin-bottom:32px;">依需求量身訂製</div>
        <div style="height:1px;background:${T.slate100};margin-bottom:32px;"></div>
        <div style="display:flex;flex-direction:column;gap:14px;margin-bottom:40px;">
          <div style="display:flex;align-items:center;gap:10px;"><div style="width:20px;height:20px;min-width:20px;border-radius:50%;background:${T.slate100};display:flex;align-items:center;justify-content:center;"><svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" fill="${T.indigo500}" viewBox="0 0 16 16"><path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/></svg></div><span style="font-size:14px;color:${T.slate700};">所有專業版功能</span></div>
          <div style="display:flex;align-items:center;gap:10px;"><div style="width:20px;height:20px;min-width:20px;border-radius:50%;background:${T.slate100};display:flex;align-items:center;justify-content:center;"><svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" fill="${T.indigo500}" viewBox="0 0 16 16"><path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/></svg></div><span style="font-size:14px;color:${T.slate700};">自訂整合開發</span></div>
          <div style="display:flex;align-items:center;gap:10px;"><div style="width:20px;height:20px;min-width:20px;border-radius:50%;background:${T.slate100};display:flex;align-items:center;justify-content:center;"><svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" fill="${T.indigo500}" viewBox="0 0 16 16"><path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/></svg></div><span style="font-size:14px;color:${T.slate700};">SLA 服務保證</span></div>
          <div style="display:flex;align-items:center;gap:10px;"><div style="width:20px;height:20px;min-width:20px;border-radius:50%;background:${T.slate100};display:flex;align-items:center;justify-content:center;"><svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" fill="${T.indigo500}" viewBox="0 0 16 16"><path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/></svg></div><span style="font-size:14px;color:${T.slate700};">專屬帳戶顧問</span></div>
        </div>
        <button style="width:100%;background:${T.slate900};color:#fff;border:none;padding:14px;border-radius:10px;font-size:15px;font-weight:600;cursor:pointer;">聯絡業務團隊</button>
      </div>
    </div>
  </div>
</section>`,
  },
 
  {
    id: 'columns0005',
    label: 'News List 5-Row',
    thumbType: 'columns',
    thumbCols: 1,
    html: `<section style="background:#f4f5f6;padding:100px 0;">
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
  </div>
  </div>
</section>`,
  },
   {
    id: 'columns0006',
    label: '3x2 Project Grid',
    thumbType: 'columns',
    thumbCols: 3,
    html: `<section style="background:#fff;padding:100px 0;">
  <div style="max-width:1200px;margin:0 auto;padding:0 48px;">
    <h2 style="text-align:center;font-size:28px;font-weight:500;color:#000;margin:0 0 64px;letter-spacing:0;line-height:42px;">精選專案探索</h2>
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:32px;">
      <div style="background:#fff;border-radius:16px;box-shadow:0 12px 32px rgba(0,0,0,0.05);overflow:hidden;display:flex;flex-direction:column;">
        <div style="background:#f4f5f6;height:280px;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="6" y="10" width="36" height="28" rx="3" stroke="#b0b8c1" stroke-width="2"/><circle cx="16" cy="21" r="3" fill="#b0b8c1"/><path d="M6 33l9-9 6 6 6-7 11 10" stroke="#b0b8c1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </div>
        <div style="padding:32px;display:flex;flex-direction:column;gap:16px;">
          <div style="display:flex;flex-direction:column;gap:8px;">
            <p style="font-size:16px;font-weight:500;color:#000;margin:0;line-height:24px;">創新設計引領未來生活空間 1</p>
            <p style="font-size:14px;font-weight:400;color:#767d86;line-height:1.5;margin:0;">我們致力於為每一位客戶提供最卓越的設計解決方案。透過深厚的技術積累與前瞻性的美學眼光，我們不僅創造空間，更在重塑生活方式。</p>
          </div>
          <button style="background:#000;color:#fff;border:none;padding:0 16px;height:40px;border-radius:8px;font-size:14px;cursor:pointer;align-self:flex-start;">查看專案</button>
        </div>
      </div>
      <div style="background:#fff;border-radius:16px;box-shadow:0 12px 32px rgba(0,0,0,0.05);overflow:hidden;display:flex;flex-direction:column;">
        <div style="background:#f4f5f6;height:280px;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="6" y="10" width="36" height="28" rx="3" stroke="#b0b8c1" stroke-width="2"/><circle cx="16" cy="21" r="3" fill="#b0b8c1"/><path d="M6 33l9-9 6 6 6-7 11 10" stroke="#b0b8c1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </div>
        <div style="padding:32px;display:flex;flex-direction:column;gap:16px;">
          <div style="display:flex;flex-direction:column;gap:8px;">
            <p style="font-size:16px;font-weight:500;color:#000;margin:0;line-height:24px;">創新設計引領未來生活空間 2</p>
            <p style="font-size:14px;font-weight:400;color:#767d86;line-height:1.5;margin:0;">我們致力於為每一位客戶提供最卓越的設計解決方案。透過深厚的技術積累與前瞻性的美學眼光，我們不僅創造空間，更在重塑生活方式。</p>
          </div>
          <button style="background:#000;color:#fff;border:none;padding:0 16px;height:40px;border-radius:8px;font-size:14px;cursor:pointer;align-self:flex-start;">查看專案</button>
        </div>
      </div>
      <div style="background:#fff;border-radius:16px;box-shadow:0 12px 32px rgba(0,0,0,0.05);overflow:hidden;display:flex;flex-direction:column;">
        <div style="background:#f4f5f6;height:280px;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="6" y="10" width="36" height="28" rx="3" stroke="#b0b8c1" stroke-width="2"/><circle cx="16" cy="21" r="3" fill="#b0b8c1"/><path d="M6 33l9-9 6 6 6-7 11 10" stroke="#b0b8c1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </div>
        <div style="padding:32px;display:flex;flex-direction:column;gap:16px;">
          <div style="display:flex;flex-direction:column;gap:8px;">
            <p style="font-size:16px;font-weight:500;color:#000;margin:0;line-height:24px;">創新設計引領未來生活空間 3</p>
            <p style="font-size:14px;font-weight:400;color:#767d86;line-height:1.5;margin:0;">我們致力於為每一位客戶提供最卓越的設計解決方案。透過深厚的技術積累與前瞻性的美學眼光，我們不僅創造空間，更在重塑生活方式。</p>
          </div>
          <button style="background:#000;color:#fff;border:none;padding:0 16px;height:40px;border-radius:8px;font-size:14px;cursor:pointer;align-self:flex-start;">查看專案</button>
        </div>
      </div>
    </div>
  </div>
</section>`,
  },
  {
    id: 'columns0007',
    label: 'Featured Article',
    thumbType: 'columns',
    thumbCols: 2,
    html: `<section style="background:#fff;padding:120px 0;">
  <div style="max-width:1600px;margin:0 auto;padding:0 48px;">
    <div style="display:flex;align-items:flex-end;justify-content:space-between;margin-bottom:80px;">
      <div style="display:flex;flex-direction:column;gap:16px;max-width:600px;">
        <p style="font-size:28px;font-weight:500;color:#000;line-height:42px;margin:0;">深度設計洞察</p>
        <p style="font-size:14px;font-weight:400;color:#767d86;line-height:21px;margin:0;">探索我們在建築、室內設計以及可持續發展領域的最新研究與實踐。</p>
      </div>
    </div>
    <div style="display:flex;gap:32px;align-items:flex-start;">
      <div style="flex:0 0 auto;width:calc(65% - 16px);background:#f4f5f6;border-radius:24px;overflow:hidden;position:relative;display:flex;flex-direction:column;align-self:stretch;">
        <div style="flex:1;display:flex;align-items:center;justify-content:center;background:#f4f5f6;min-height:300px;">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="6" y="10" width="36" height="28" rx="3" stroke="#b0b8c1" stroke-width="2"/><circle cx="16" cy="21" r="3" fill="#b0b8c1"/><path d="M6 33l9-9 6 6 6-7 11 10" stroke="#b0b8c1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </div>
        <div style="position:absolute;bottom:0;left:0;right:0;background:linear-gradient(to bottom,rgba(0,0,0,0),rgba(0,0,0,0.73));padding:48px;">
          <div style="display:flex;flex-direction:column;gap:12px;color:#fff;">
            <p style="font-size:28px;font-weight:500;line-height:42px;margin:0;">年度最具影響力的設計趨勢報告</p>
            <p style="font-size:14px;font-weight:400;line-height:21px;opacity:0.8;margin:0;">從極簡主義到生物親和設計，我們拆解了 2024 年如何定義未來的居住環境。</p>
          </div>
        </div>
      </div>
      <div style="flex:1;display:flex;flex-direction:column;gap:32px;min-width:0;">
        <div style="display:flex;gap:20px;align-items:center;padding-bottom:32px;border-bottom:1px solid #a9b0b9;">
          <div style="flex:0 0 180px;height:180px;background:#f4f5f6;border-radius:12px;display:flex;align-items:center;justify-content:center;">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="6" y="10" width="36" height="28" rx="3" stroke="#b0b8c1" stroke-width="2"/><circle cx="16" cy="21" r="3" fill="#b0b8c1"/><path d="M6 33l9-9 6 6 6-7 11 10" stroke="#b0b8c1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </div>
          <div style="flex:1;display:flex;flex-direction:column;gap:12px;min-width:0;">
            <p style="font-size:16px;font-weight:500;color:#000;line-height:24px;margin:0;">永續建材的革新應用</p>
            <p style="font-size:14px;font-weight:400;color:#767d86;line-height:21px;margin:0;">了解我們如何在商業空間中融入心理學概念，提升使用者的幸福感。</p>
            <p style="font-size:14px;font-weight:400;color:#000;line-height:21px;margin:0;">閱讀更多 →</p>
          </div>
        </div>
        <div style="display:flex;gap:20px;align-items:center;padding-bottom:32px;border-bottom:1px solid #a9b0b9;">
          <div style="flex:0 0 180px;height:180px;background:#f4f5f6;border-radius:12px;display:flex;align-items:center;justify-content:center;">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="6" y="10" width="36" height="28" rx="3" stroke="#b0b8c1" stroke-width="2"/><circle cx="16" cy="21" r="3" fill="#b0b8c1"/><path d="M6 33l9-9 6 6 6-7 11 10" stroke="#b0b8c1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </div>
          <div style="flex:1;display:flex;flex-direction:column;gap:12px;min-width:0;">
            <p style="font-size:16px;font-weight:500;color:#000;line-height:24px;margin:0;">空間色彩心理學探討</p>
            <p style="font-size:14px;font-weight:400;color:#767d86;line-height:21px;margin:0;">了解我們如何在商業空間中融入心理學概念，提升使用者的幸福感。</p>
            <p style="font-size:14px;font-weight:400;color:#000;line-height:21px;margin:0;">閱讀更多 →</p>
          </div>
        </div>
        <div style="display:flex;gap:20px;align-items:center;padding-bottom:32px;border-bottom:1px solid #a9b0b9;">
          <div style="flex:0 0 180px;height:180px;background:#f4f5f6;border-radius:12px;display:flex;align-items:center;justify-content:center;">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="6" y="10" width="36" height="28" rx="3" stroke="#b0b8c1" stroke-width="2"/><circle cx="16" cy="21" r="3" fill="#b0b8c1"/><path d="M6 33l9-9 6 6 6-7 11 10" stroke="#b0b8c1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </div>
          <div style="flex:1;display:flex;flex-direction:column;gap:12px;min-width:0;">
            <p style="font-size:16px;font-weight:500;color:#000;line-height:24px;margin:0;">生物親和設計的未來</p>
            <p style="font-size:14px;font-weight:400;color:#767d86;line-height:21px;margin:0;">了解我們如何在商業空間中融入心理學概念，提升使用者的幸福感。</p>
            <p style="font-size:14px;font-weight:400;color:#000;line-height:21px;margin:0;">閱讀更多 →</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`,
  },
];
