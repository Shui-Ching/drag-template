# Drag Template — 拖曳式頁面組裝系統

一套給 **PM / 業務** 使用的拖曳式頁面組裝工具（Page Builder）。
讓非技術人員透過拖曳區塊，快速拼出頁面草稿，提供給客戶討論結構。

🔗 **線上 Demo**：https://shui-ching.github.io/drag-template/

---

## 功能特色

- 🧱 **拖曳組裝**：從側邊欄把區塊拖入畫布，依序堆疊成一頁
- 🗂️ **分類化區塊**：Header、Banner、Columns、CTA、Footer 五大分類，每類多種排版變體
- 🖼️ **一鍵匯出**：透過 `html2canvas` 將畫布輸出成 JPG 圖片
- ⚡ **純前端、無框架**：HTML / SCSS / Vanilla JS（ES Modules），易維護、易擴充

## 技術棧

- HTML / SCSS（編譯成 CSS）/ Vanilla JS（ES Modules）
- [html2canvas](https://html2canvas.hertzen.com/)（CDN，JPG 匯出用）
- Google Fonts（CDN）

## 本機開發

> ⚠️ `js/main.js` 使用 `type="module"`，**必須透過本機 Server 開啟**，不可直接用 `file://`。

```bash
# 啟動本機 Server（擇一）
npx serve .
# 或使用 VS Code「Live Server」擴充套件，在 index.html 按右鍵 → Open with Live Server

# 編譯 SCSS（單次）
sass scss/main.scss css/main.css

# 監聽模式（開發中使用）
sass --watch scss/main.scss:css/main.css
```

## 檔案結構

```
drag-template/
├── index.html              # 主 HTML，引用外部 CSS / JS
├── scss/                   # SCSS 原始碼（編譯成 css/main.css）
│   ├── main.scss           # 入口，@import 所有 partials
│   ├── _variables.scss     # 設計 Token（顏色、字型）
│   ├── _layout.scss        # App grid
│   ├── _toolbar.scss       # Toolbar + .btn
│   ├── _sidebar.scss       # 分類列 + 區塊卡片
│   ├── _thumbs.scss        # 縮圖示意 CSS
│   ├── _canvas.scss        # 畫布 + 拖曳覆蓋層
│   └── _toast.scss
├── css/                    # ⚠️ 由 sass 編譯產生，勿手動修改
├── js/
│   ├── data/               # 區塊 HTML 資料（按分類分檔）
│   ├── registry.js         # 匯入所有資料，匯出 CATEGORIES / BLOCKS / getBlock
│   ├── app.js              # state + render + 拖曳邏輯
│   ├── export.js           # html2canvas 匯出邏輯
│   └── main.js             # 入口：初始化 + 按鈕綁定
└── README.md
```

## 擴充區塊

新增區塊只需在對應分類的 registry 陣列（`js/data/{分類}.js`）加入新物件：

```js
{
  id: 'header0001',        // 唯一識別碼，命名規則：{分類}{4位數字}
  label: 'Dark Nav',       // 顯示名稱
  category: 'header',      // 所屬分類
  html: `...`,             // 完整自包含 HTML（只能用 inline style）
}
```

規則：

1. 遵守命名規則（`{分類}{0001~9999}`）
2. **HTML 全用 inline style**，不依賴應用程式的全域 CSS，確保獨立渲染正確
3. 不需修改其他程式碼，渲染與拖曳邏輯自動適用

## 部署

專案託管於 **GitHub Pages**。推送到 `main` 分支後會自動重新部署（約 1～2 分鐘），網址不變：

```bash
git add -A
git commit -m "你的訊息"
git push
```
