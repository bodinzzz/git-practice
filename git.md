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


## Commit Message 撰寫風格

##### 參考資料
1. https://www.youtube.com/watch?v=LgTf7m5B0xA
2. 
(內容有經過 GPT 修飾)
