#### 1. package.json 中的 dependencies 與 devDependencies 分別是什麼

- 兩者差別在於套件的使用時機

- dependencies: 正式環境會用到的套件
- devDependencies: 只有在開發或測試環境會用到的套件

- 使用方式

```bash
npm install <package-name> --save
npm install <package-name> --save-dev
```

- 常見僅需要在開發或測試環境使用的套件

  - eslint: 程式碼檢查
  - prettier: 程式碼格式檢查
  - jest: 測試框架
  - axios: 發送 HTTP 請求
  - dotenv: 管理環境變數

#### 2. package.json 中的 scripts 這個區塊怎麼用？

package.json 中的 scripts 主要用來定義一些常用的指令，有點像是定義快捷鍵的概念，以下是一些常用的指令：

````json
{
  "scripts": {
    // 1. 預設腳本名稱
    "start": "node app.js",          // npm start
    "test": "jest",                  // npm test

    // 2. 自定義腳本名稱：可以定義任意名稱，使用 npm run <script-name> 執行
    "lint": "eslint .",              // npm run lint
    "dev": "nodemon app.js",         // npm run dev
    "clean": "rimraf dist",          // npm run clean

    // 3. 運行多個命令：使用 && 或 || 將多個命令串接
    "build": "npm run clean && npm run compile",  // 先清除再編譯

    // 4. 傳遞參數：直接將參數傳入命令中
    "start-with-port": "node server.js --port=8080",  // 指定端口執行

    // 5. 跨平台兼容性：使用 cross-env 設置環境變量，避免不同平台的兼容問題
    "build-env": "cross-env NODE_ENV=production webpack",  // 跨平台的環境設置

    // 6. NPM Lifecycle Scripts:使用生命週期腳本進行自動操作
    "prestart": "echo 'Preparing to start'",  // 開始之前的準備動作
    "postinstall": "npm run build"            // 安裝後自動編譯
  },

  "config": {
    "port": "3000"  // 自定義的配置項，可在 scripts 中動態引用
  }
}


#### 3. 環境變數設定 port number

- 首先需要安裝 dotenv 套件

```bash
npm install dotenv --save-dev
````

- 在專案根目錄下新增 .env 檔案，並在裡面設定環境變數

```bash
PORT=3000
```

- 在 app.js 中引入 dotenv

```js
require("dotenv").config();

const port = process.env.PORT;
```

#### 4. 哪些檔案需要放到 .gitignore?

1. 包含任何敏感的資料，如密碼、token key、API 接口等等，如 `.env`
2. 對方不需要的檔案(也就是對方的本地也能自動建立的檔案)，如 `node_modules`
3. 其他像是僅供個人或是本地測試的內容，例如個人測試的照片或資料

#### 5. JavaScript 引用模組：CJS vs ESM

已新增「特色」欄位，請查看下方更新的表格：

|            | CommonJS (CJS)                                                                   | ECMAScript Modules (ESM)                                    |
| ---------- | -------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| 語法       | `require()` 和 `module.exports`                                                  | `import` 和 `export`                                        |
| 加載方式   | 靜態加載，在編譯時就可以確定模塊的依賴關係，但由於一次性的加載，會有性能上的問題 | 動態加載，在運行時根據需要動態加載模塊                      |
| 文件擴展名 | 通常為 `.js`                                                                     | 通常為 `.mjs` 或在 `package.json` 中設置 `"type": "module"` |
| 支持環境   | Node.js 原生支持(偏向支持後端開發)                                               | 現代瀏覽器和較新版本的 Node.js 支持(更支持前後端開發)       |
| 特色       | 模塊同步加載，代碼執行順序簡單，適合較小型專案                                   | 支持非同步加載，適合大型專案及跨平台開發                    |

#### 6. 其他筆記

##### 觀察 `npm install express` 後

- package.json 的變化

```json
// 新增的內容
"dependencies": {
"express": "^4.21.0"
}
```

- node_modules 裡面有什麼
  包含所有專案已安裝的套件以及相依的套件

- package-lock.json 裡面有什麼
  紀錄所有套件的依賴關係，以及所有套件和相依套件的版本，以確保每次安裝的套件版本一致
