# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

# 專案說明

這是一套給 PM / 業務使用的**拖曳式頁面組裝系統（Page Builder）**。
目標是讓非技術人員能透過拖曳區塊，快速拼出頁面草稿提供給客戶討論結構。

## 核心概念

- **分類（Category）**：header、banner、columns、cta、footer …（可擴充）
- **區塊（Block）**：每個分類下有多個排版變體，命名如 `header0001`、`banner0002`（可擴充）
- **元件（Component）**：卡片、icon 等可複用的 UI 片段（可擴充）
- **畫布（Canvas）**：User 將區塊拖入此處，依序堆疊成一頁

## 技術棧

純前端，**無框架、需 Sass CLI 編譯 SCSS**：

- HTML / SCSS（編譯成 CSS）/ Vanilla JS（ES Modules）
- CDN 引入 `html2canvas`（JPG 匯出用）
- Google Fonts CDN

> **注意**：`js/main.js` 使用 `type="module"`，必須透過本機 Server 開啟，不可直接用 `file://`。
> 推薦：VS Code Live Server 或 `npx serve .`

## 開發指令

```bash
# 編譯 SCSS（單次）
sass scss/main.scss css/main.css

# 監聽模式（開發中使用）
sass --watch scss/main.scss:css/main.css

# 啟動本機 Server（若無 Live Server）
npx serve .
```

## 檔案結構

```
drag-template/
├── index.html              # 主 HTML，引用外部 CSS / JS
├── scss/
│   ├── main.scss           # 入口，@import 所有 partials
│   ├── _variables.scss     # 設計 Token（顏色、字型）
│   ├── _reset.scss
│   ├── _layout.scss        # App grid
│   ├── _toolbar.scss       # Toolbar + .btn
│   ├── _sidebar.scss       # 分類列 + 區塊卡片
│   ├── _thumbs.scss        # 縮圖示意 CSS
│   ├── _canvas.scss        # 畫布 + 拖曳覆蓋層
│   └── _toast.scss
├── css/
│   └── main.css            # ⚠️ 由 sass 編譯產生，勿手動修改
├── js/
│   ├── data/               # 區塊 HTML 資料（按分類分檔）
│   │   ├── categories.js
│   │   ├── header.js
│   │   ├── banner.js
│   │   ├── columns.js
│   │   ├── cta.js
│   │   └── footer.js
│   ├── registry.js         # 匯入所有資料，匯出 CATEGORIES / BLOCKS / getBlock
│   ├── app.js              # state + render + dnd（緊耦合合為一檔）
│   ├── export.js           # html2canvas 匯出邏輯
│   └── main.js             # 入口：初始化 + 按鈕綁定
└── CLAUDE.md
```

## 區塊資料格式

每個區塊以 JS 物件描述，需包含：

```js
{
  id: 'header0001',        // 唯一識別碼，命名規則：{分類}{4位數字}
  label: 'Dark Nav',       // 顯示名稱
  category: 'header',      // 所屬分類
  html: `...`,             // 完整自包含 HTML（只能用 inline style，不依賴外部 class）
}
```

> **重要**：區塊 HTML 必須使用 inline style，不依賴應用程式的全域 CSS，確保獨立渲染正確。

## 區塊 HTML 編寫規範

**Icon**
- 禁止使用 emoji 或 Unicode 符號（如 ★ ♥ ✦ 🇹🇼）
- 需要圖示一律使用 **Bootstrap Icons inline SVG**，不引入 CDN class
- 確保區塊 self-contained，不依賴外部資源

**色彩**
- 單一區塊最多使用 2–3 種主要色彩
- 以 `columns0005`（News List 5-Row）為最小化配色參考：
  - `#f4f5f6` 底色、`#fff` 卡片、`#000` 主文、`#767d86` 副文
- 如需品牌色，優先使用 `tokens.js` 中定義的 Token（`T.indigo500`、`T.slate900` 等）
- 避免在同一區塊混用多個漸層或彩虹色系

## 擴充區塊

新增區塊只需在對應分類的 block registry 陣列加入新物件：

1. 遵守命名規則（`{分類}{0001~9999}`）
2. HTML 全用 inline style
3. 不需修改其他程式碼，渲染與拖曳邏輯自動適用

## 匯出功能

使用 `html2canvas` 擷取畫布 DOM，輸出 JPG。
匯出目標 element id：`#page-canvas`。

---

## 從 Figma 切版並新增區塊（標準流程）

### 前置條件

- 需要 Figma MCP（`mcp__claude_ai_Figma__get_design_context`）
- Figma URL 必須帶有 `node-id`（選到特定 frame），範例：
  `https://www.figma.com/design/{fileKey}/...?node-id=884-3168`

### 執行步驟

1. **解析 URL**：從 Figma URL 取出 `fileKey` 與 `nodeId`（`884-3168` → `884:3168`）
2. **取得設計稿**：呼叫 `get_design_context`，取得 React+Tailwind 參考碼與截圖
3. **轉換為 inline HTML**：將所有 Tailwind class 改寫為 inline style，不保留任何外部 class
4. **判斷分類**：依設計語意選擇 `js/data/{category}.js`，ID 接現有最大號往下排
5. **加入陣列**：在對應 `.js` 檔案的 export 陣列末尾加入新物件
6. **提醒編譯**：完成後提醒使用者手動執行 `sass scss/main.scss css/main.css`

### 版面寬度規格

Figma 設計畫布為 **1920px**，左右各 360px padding，**內容區為 1200px**。

區塊 HTML 結構必須遵照：

```html
<!-- section：全寬背景色，僅設定垂直 padding -->
<section style="background: #f4f5f6; padding: 100px 0; font-family: 'Noto Sans TC', sans-serif;">
  <!-- 內層 wrapper：限制最大寬度並水平置中 -->
  <div style="max-width: 1200px; margin: 0 auto; padding: 0 48px;">
    <!-- 實際內容 -->
  </div>
</section>
```

> 直接在 `<section>` 加水平 padding 而不用 max-width，會讓區塊在寬螢幕上過度延伸，不符合設計稿比例。

### 圖片 Placeholder 規格

Figma MCP 回傳的 asset URL **7 天後失效**，不可直接使用。
一律改為內嵌 SVG：

```html
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="6" y="10" width="36" height="28" rx="3" stroke="#b0b8c1" stroke-width="2"/>
  <circle cx="16" cy="21" r="3" fill="#b0b8c1"/>
  <path d="M6 33l9-9 6 6 6-7 11 10" stroke="#b0b8c1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
```

### 字型

設計稿使用 `Noto Sans TC`（`index.html` 已透過 Google Fonts CDN 載入）。
inline style 寫法：`font-family: 'Noto Sans TC', sans-serif`

### SCSS 編譯

**不要自動執行** `sass` 指令。切版完成後，提醒使用者手動編譯：

```bash
sass scss/main.scss css/main.css
```
