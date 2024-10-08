### 1. Instance 的 public IP：3.89.200.204

### 2. 什麼是 instance type?

- AWS 的官方定義

> 執行個體類型由不同的 CPU、記憶體、儲存體和聯網容量組合而成，讓您為應用程式彈性選擇適當的資源組合。每種執行個體類型都包括一或多種執行個體大小，讓您能夠依照目標工作負載需求擴展資源。

簡單來說，就是 AWS 定義了不同規格組合的虛擬機配置，讓使用者能夠依照需求選擇。

### 3. 什麼是 Nginx？有哪些用途與特性？

- Nginx 官方定義

> nginx（「engine x」）是一個 HTTP Web 伺服器、反向代理、內容快取、負載平衡器、TCP/UDP 代理伺服器和郵件代理伺服器，以靈活性、高效能和低資源利用率而聞名

- Web Server VS Application Server
  - Web Server 提供 Web 服務，主要負責處理靜態資源、負載平衡(將請求分配給不同 Application Server，避免過高流量導致系統炸掉)、反向代理(根據 DNS 分配到不同的 port)。我們常聽到的 web server 有 Ngnix 和 Apache，而 Apache 又相對 Ngnix 效能較高。
  - Application Server 通常指我們平常使用 node.js、python 等等的程式語言執行的 server，通常處理靜態和動態的資源。

### 4. 什麼是 pm2 套件，有什麼用途？

主要負責管理 Node.js 程式的運行，主要用途如下：

1. 讓程式運行不中斷，如果意外關閉，會自動重啟。
2. 負載平衡，可能啟動多個應用程式來分散流量。
3. 可監控 CPU 的使用率、記憶體用量。

### 5. Proxy

#### Proxy 的定義：為什麼要透過 Nginx 來 `proxy` 到 Express 開發的 Web Server?

「Proxy 代理」有點像是一個中介者的角色，負責處理傳入或是傳出的流量，讓用戶和伺服器兩端不會直接連結 (有點類似 VPN 的概念)。
透過 Nginx 來 `proxy` 到 Express 開發的 Web Server，可以有以下好處

1. 提高效能：。Proxy server 也會有類似 cache 的功能，讓用戶在訪問網站資源時，能夠先向 Proxy 撈資料，如果沒有資料，才向比較遠端的 Web server 拿取。
2. 提高安全性

#### `Reverse proxy` vs `Forward Proxy`

這兩種代理主要差別在於「代理誰」

- Reverse proxy 正向代理：代理用戶端，幫助用戶端訪問無法訪問的資源
- Reverse proxy 反向代理：代理伺服器端，幫助伺服器端管理用戶的請求

### 6. 在 readme 中提供步驟 9 的 Nginx 設定檔

```=bash
server {
    listen 80;
    listen [::]:80;

    server_name example.com;

    root /var/www/example.com;
    index index.html;

    root /var/www/html;

    # Add index.php to the list if you are using PHP
    index index.html index.htm index.nginx-debian.html;

    server_name _;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### 7. Security Group 是什麼？用途為何？有什麼設定原則嗎？

Security Group 是一個 AWS 提供的虛擬防火牆，能夠控制進出 EC2 的網路流量。可以自定義規則，如僅限定特定的 IP 或是特定協議可以訪問。
主要設定的原則，我們以「最小權限」為主，也就是說，我們只開放「必要的」 port 和服務。並優先選擇經過加密的協議，例如 HTTPS。

### 8. 什麼是 sudo? 為什麼有的時候需要加上 sudo，有時候不用？

sudo 代表 "Superuser Do"，讓你暫時能夠獲得「最高權限」來執行指令。
通常只會在修改系統設置、開啟經保護的文件或是檔案、安裝軟體等等的情況才會使用到。

### 9. Nginx 的 Log 檔案在哪裡？你怎麼找到的？怎麼看 Nginx 的 Log？

#### 查找 Log 檔案

1. 查看 Nginx 配置文件：

```bash
cat /etc/nginx/nginx.conf
```

尋找類似以下的行：

```nginx
error_log /var/log/nginx/error.log;
access_log /var/log/nginx/access.log;
```

2. 使用 find 命令：

```bash
sudo find /var/log -name "*nginx*"
```

#### 查看日誌的方法

1. 即時查看

```bash
# 錯誤日誌
sudo tail -f /var/log/nginx/error.log

# 訪問日誌
sudo tail -f /var/log/nginx/access.log
```

2. 查看最後 n 行

```bash
# 查看最後 100 行錯誤日誌
sudo tail -n 100 /var/log/nginx/error.log
```

3. 搜索特定內容

```bash
# 搜索包含 "404" 的訪問日誌
sudo grep "404" /var/log/nginx/access.log

# 搜索特定時間段的日誌
sudo grep "29/Jan/2024" /var/log/nginx/access.log
```

### 10. 其他你在過程中遭遇的問題

無

##### 參考資料

- https://aws.amazon.com/tw/ec2/instance-types/
- https://nginx.org/en/
- https://medium.com/starbugs/web-server-nginx-2-bc41c6268646
- https://medium.com/starbugs/web-server-nginx-1-cf5188459108
- https://www.ithome.com.tw/news/5006
- https://ithelp.ithome.com.tw/articles/10243636
