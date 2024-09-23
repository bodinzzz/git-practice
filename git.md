# Git 基本概念
## 基本概念
### 1. `blob`：檔案的內容
**說明**：`blob` 是 Git 中用來儲存檔案內容的物件(不包含檔名或位置)。每一次 `git add` 之後，檔案內容會被壓縮成一個 blob 物件，並利用 SHA1 演算法計算的雜湊值作為該物件的唯一識別符。若相同的檔案內容重新推上 git，會因為雜湊值相同而不再重新建立一次 blob 物件。
```bash
git add <file-name>
git hash-object <file-name> # 輸出檔案內容的 SHA1 值
git cat-file -p <file_hash> # 輸出檔案的實際內容
```
---
### 2. `tree`：目錄結構
**說明**：`tree` 記錄了檔案和目錄的結構。每一次 `git commit` 之後，Git 都會建立一個 `tree` 來表示當下的目錄狀態。
```bash
git ls-tree <commit_hash> # 顯示指定 commit 的 tree 結構
git cat-file -p <tree_hash> # 顯示 tree 物件的詳細內容
```
---
### 3. `commit`：提交紀錄
**說明**：`commit` 是專案當下狀態的快照，包含所有檔案的版本、修改資訊和提交訊息。這就像是一個儲存檔案版本的歷史點，可以回溯到之前的狀態。
```bash
git commit -m "Initial commit" # 提交變更並附上訊息
git show <commit_hash> # 顯示指定提交的詳細內容
```
---
### 4. `branch`：分支
**說明**：`branch` 是一個指向某個 `commit` 的指標。在單個檔案中存放所指向的 commit 物件 Hash 值。
```bash
git branch new-feature # 建立新分支
git checkout new-feature # 切換至 new-feature 分支
git branch -d new-feature # 刪除 new-feature 分支
```
---
### 5. `head`：當前工作位置
**說明**：`head` 指向你當前所在的 `commit`，表示你正在某個分支上的最新版本工作。每當你切換分支或提交新的變更，`head` 會隨之移動。
```bash
git checkout main # 切換至 main 分支
git reset --hard HEAD~1 # 將當前分支重置到前一個提交點
```

## .git 檔案夾裡的變化
1. `git add`
  - 新增的檔案內容會以 blob 物件形式寫入 .git 資料夾中的 objects 目錄
  - index 檔案（暫存區的映射）會更新
2. `git commit`
- objects 資料夾會更新，寫入新的 commit 物件，包括：
  - Blob：每個被追蹤的檔案的內容會以 blob 物件形式保存。
  - Tree：代表檔案夾結構的物件。
  - Commit：保存指向 tree 物件、父 commit、提交訊息等資訊的物件。
- refs 資料夾（或 .git/HEAD 檔案）會被更新，指向最新的 commit。
- logs 資料夾中的檔案（例如 .git/logs/HEAD）會更新，記錄每次指標移動的詳細情況，方便進行回溯操作

## Commit Message 撰寫風格
### 基本原則
- 每個 commit 應該只包含一個邏輯變更(協作的好習慣：每一次開始寫新程式碼時先從遠端 pull 回本地端)
- commit message 應該清楚說明變更的原因（why）和內容（what）
- 英文撰寫，使用祈使句
- 若與多人協作，可以在最前方寫下名字、commit 的日期

## 格式結構
```
<type>(<scope>): <subject>

<body>

<footer>
```

### Header
- `type`: 必填，表示 commit 的類型
  - `feat`: 新功能
  - `fix`: 修復bug
  - `docs`: 文檔更新
  - `style`: 代碼格式調整
  - `refactor`: 重構代碼
  - `test`: 添加測試
  - `chore`: 構建過程或輔助工具的變動
  - `scope`: 選填，表示影響的範圍
  - `subject`: 必填，簡短描述，不超過50字元

### Body
- 選填，詳細說明變更的內容以及原因

### Footer
- 選填，用於說明重大變更或關閉Issue

## 實用技巧
- 使用 "If applied, this commit will <你的標題>" 來檢查標題的正確性
- 重要的變更應在 Footer 中標注 `BREAKING CHANGE:`
- 關閉 Issue 時使用 `Closes #123, #456`


##### 參考資料
1. https://www.youtube.com/watch?v=LgTf7m5B0xA
2. https://hackmd.io/VHVoqzLmTDaTFvV_Al_RbA
(內容有經過 GPT 修飾)
