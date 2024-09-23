### 安裝的 nodejs 版本

在 terminal 中輸入 `node -v` 後得知已經安裝 v22.3.0 版本，當初選擇該版本的原因是最新的 LTS 版本，也就是相對穩定，有相對新功能的版本。

思考：需要定期更新嗎？

- 更新的好處
  - 最新的 LTS 版本相對較安全
- 更新的缺點
  - 新版本可能引入不兼容的變更，導致某些依賴包或程式碼沒辦法正常運行。

### 套件管理工具整理與比較

| 特性     | npm                          | yarn                       | pnpm                       | bun                          |
| -------- | ---------------------------- | -------------------------- | -------------------------- | ---------------------------- |
| 速度     | 較慢                         | 快                         | 非常快                     | 最快                         |
| 存儲效率 | 低                           | 中                         | 高                         | -                            |
| 生態系統 | 最大                         | 大                         | 兼容 npm                   | 發展中                       |
| 安全性   | 基本                         | 高                         | -                          | -                            |
| 適用場景 | 小型項目<br>需要廣泛套件支援 | 中大型項目<br>需要更好性能 | 注重磁盤空間<br>和安裝速度 | 追求極致性能<br>整合開發體驗 |
| 特點     | 簡單易用<br>有高完整的社群   | 支援離線模式               | 節省磁盤空間               | 全新 runtime<br>整合度高     |

### nvm 與 npm 分別是什麼

- nvm (Node Version Manager)
  - 是 Node.js 的版本管理工具，它允許我們在同一台電腦上安裝和切換不同版本的 Node.js，方便我們測試。
- npm (Node Package Manager)
  - 是 Node.js 的套件管理器，用於安裝、共享和管理 JavaScript 套件。

##### 參考資料

- https://medium.com/@AALA-IT-Solutions/package-managers-a-face-off-npm-vs-pnpm-vs-yarn-vs-bun-d3375683fbcb
- https://stark920.github.io/2022/02/21/nodejsStart/
- https://www.youtube.com/watch?v=YJdh2E4idmY
  (以上內容有使用 GPT 潤稿)
