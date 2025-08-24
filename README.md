# 2025 KC 英文教材影音資源

這是一個簡單的 **PWA (Progressive Web App)** 網站，用於提供 2025 年幼兒園小班 (KC) 的英文課本 CD 與影片連結清單，方便家長與學生快速開啟學習資源。

## ✨ 功能特色
- **教材清單**：依「課本」、「故事」分類，列出對應的 CD 與影片資源。
- **PWA 安裝**：支援 Android 與 iOS 可安裝到主畫面，全螢幕瀏覽。
- **自動更新/刷新**：
  - 網站具備 Service Worker，支援快取與自動更新。
  - 在 iOS 安裝模式下，Header 會出現「刷新」按鈕，方便手動更新。
- **響應式設計**：採用 Tailwind CSS + daisyUI，適合行動裝置。

## 🛠 技術堆疊
- HTML5 / CSS3 / JavaScript (原生)
- [Tailwind CSS](https://tailwindcss.com/) + [daisyUI](https://daisyui.com/)
- [Alpine.js](https://alpinejs.dev/)
- Service Worker (簡易快取與更新管理)
- GitHub Pages 部署

## 📂 專案結構
```
english-learning-materials/
├── index.html              # 主頁面
├── sw.js                   # Service Worker
├── manifest.webmanifest    # PWA 設定檔
├── icons/                  # PWA 圖示
└── README.md               # 專案說明文件
```

## 🚀 使用方式
1. 開啟 [GitHub Pages 部署網址](https://你的帳號.github.io/english-learning-materials/)。
2. **安裝到主畫面**：
   - Android：使用 Chrome → 功能表 → 「安裝應用程式」。
   - iOS：使用 Safari → 分享 → 「加入主畫面」。
3. 點選清單中的「CD」或「影片」按鈕即可開啟。

## 📱 iOS 特殊處理
- 因為 iOS PWA 缺少瀏覽器的刷新功能，網站在安裝模式下會在 Header 顯示「刷新」圖示按鈕，點擊即可重新整理。

## 🔧 開發 & 部署
1. Clone 專案：
   ```bash
   git clone https://github.com/你的帳號/english-learning-materials.git
   cd english-learning-materials
   ```
2. 本地測試：直接用瀏覽器開啟 `index.html`。
3. 發布到 GitHub Pages：
   - 推送到 `main` 或 `gh-pages` 分支。
   - 在 GitHub 設定 → Pages → 選擇分支並啟用。

## 📄 授權
此專案僅供教學與學習使用。
