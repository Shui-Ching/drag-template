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

## 擴充區塊

新增區塊只需在對應分類的 block registry 陣列加入新物件：

1. 遵守命名規則（`{分類}{0001~9999}`）
2. HTML 全用 inline style
3. 不需修改其他程式碼，渲染與拖曳邏輯自動適用

## 匯出功能

使用 `html2canvas` 擷取畫布 DOM，輸出 JPG。
匯出目標 element id：`#page-canvas`。
