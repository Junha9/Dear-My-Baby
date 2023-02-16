# Porting Manual

Linux 환경에서 적용

## 1. Nginx

Nginx를 설치한다

```
sudo apt-get install nginx
```

### 1-1. SSL 인증서 적용

Let's Encrypt로부터 무료 SSL 인증서를 발급받기 위해 letsencrypt를 설치한다

```
sudo apt-get install letsencrypt
```

도메인에 알맞게 인증서를 발급 받는다

```
sudo letsencrypt certonly --standalone -d [도메인]
ls /etc/letsencrypt/live/[도메인]
```

파일 생성 후 nginx 설정을 채워준다.

```
sudo vim /etc/nginx/sites-available/[적절한파일명].conf
```

도메인이 *i8a206.p.ssafy.io*인 경우 다음과 같다.

```nginx
server {

  location /{
    proxy_pass http://localhost:3000;
  }

  location /assets/ {
    proxy_pass http://localhost:3000/assets/;
  }

  location /api {
    location /api/member {
      if ($request_method = 'OPTIONS') {
        add_header 'Access-Control-Allow-Origin' '$http_origin';
        add_header 'Access-Control-Allow-Credentials' 'true';
        add_header 'Access-Control-Allow-Methods' 'GET, POST, PUT, DELETE, PATCH, OPTIONS';
        add_header 'Access-Control-Allow-Headers' 'Content-Type, Access-Token';
        return 204;
      }
      proxy_hide_header 'Access-Control-Allow-Origin';
      add_header 'Access-Control-Allow-Origin' '$http_origin' always;
      add_header 'Access-Control-Allow-Credentials' 'true' always;
      add_header 'Access-Control-Expose-Headers' 'Set-Cookie';

      proxy_pass http://localhost:8080/api/member;
    }

    if ($request_method = 'OPTIONS') {
    add_header 'Access-Control-Allow-Origin' '*';
    add_header 'Access-Control-Allow-Methods' 'GET, POST, PUT, DELETE, PATCH, OPTIONS';
    add_header 'Access-Control-Allow-Headers' 'Content-Type, Access-Token';
    add_header 'Access-Control-Max-Age' 86400;
    return 204;
    }

    # 1. hide the Access-Control-Allow-Origin from the server response
    proxy_hide_header 'Access-Control-Allow-Origin';
    # 2. add a new custom header that allows all * origin instead
    add_header 'Access-Control-Allow-Origin' '*' always;

    proxy_pass http://localhost:8080/api;
  }

  location /jenkins {
    proxy_pass http://localhost:8000/jenkins;
  }

  location /swagger-ui/ {
    proxy_pass http://localhost:8080/swagger-ui/;
  }

  location /v3/api-docs/ {
    proxy_pass http://localhost:8080/v3/api-docs/;
  }

  listen 443 ssl; # managed by Certbot
  ssl_certificate /etc/letsencrypt/live/i8a206.p.ssafy.io/fullchain.pem; # managed by Certbot
  ssl_certificate_key /etc/letsencrypt/live/i8a206.p.ssafy.io/privkey.pem; # managed by Certbot
  # include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
  # ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot
}

server {

  if ($host = i8a206.p.ssafy.io) {
    return 301 https://$host$request_uri;
  } # managed by Certbot

  listen 80;
  server_name i8a206.p.ssafy.io;
  return 404; # managed by Certbot
}
```

nginx 설정을 링크하고 테스트한 다음 다시 실행하면 SSL이 적용된다

```
sudo ln -s /etc/nginx/sites-available/[파일명].conf /etc/nginx/sites-enabled/[파일명].conf
sudo nginx -t
sudo nginx -s reload
```

## 2. MySQL

MySQL 서버를 설치

```
sudo apt install mysql-server
```

root 계정으로 접속한다

```
sudo mysql -u root
```

백엔드에서 사용할 계정을 만들어준다

```sql
use mysql;
CREATE USER 'ssafy'@'%' identified with mysql_native_password 'ssafy';
FLUSH PRIVILEGES;
```

데이터베이스 생성 후 권한을 허용해준다

```sql
create databases dearmybaby;
GRANT ALL PRIVILEGES ON dearmybaby.* to 'ssafy'@'%';
FLUSH PRIVILEGES;
```

MySQL 설정 파일을 연다

```
sudo vim /etc/mysql/mysql.conf.d/mysqld.cnf
```

외부에서의 접속도 허용하기 위해 bind-address 값을 0.0.0.0으로 바꿔준다

```
bind-address = 0.0.0.0
```

MySQL을 재실행한다

```
sudo service mysql restart
```

## 3. Docker

https://docs.docker.com/engine/install/ubuntu/

공식 문서에 나온대로 Docker 클라이언트와 데이몬을 설치해준다.

```
sudo apt-get remove docker docker-engine docker.io containerd runc
```

```
sudo apt-get update
sudo apt-get install \
  ca-certificates \
  curl \
  gnupg \
  lsb-release
```

```
sudo mkdir -m 0755 -p /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
```

```
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

```
sudo apt-get update
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

## 4. Docker Image 만들기

소스코드를 클론 한다

```
git clone https://lab.ssafy.com/s08-webmobile1-sub2/S08P12A206
```

프론트엔드 dearmybaby-frontend:latest 이미지를 만들어준다.
빌드 과정에서 API_BASE_URL, KAKAO_API_KEY 환경 변수를 제공해줘야 한다.

```
cd ./frontend
npm install
(export API_BASE_URL=https://i8a206.p.ssafy.io; export KAKAO_API_KEY={카카오API키}; npm run build)
docker build -t dearmybaby-frontend:latest .
cd ..
```

dearmybaby-frontend:latest 이미지로 dearmybaby-frontend 컨테이너를 만들어 실행한다.

```
sudo docker run -d -p 3000:8080 --name dearmybaby-frontend dearmybaby-frontend:latest
```

백엔드 dearmybaby-backend:latest 이미지를 만들어준다

```
cd ./backend
./gradlew bootBuildImage --imageName=dearmybaby-backend:latest
cd ..
```

dearmybaby-backend:latest 이미지로 dearmybaby-backend 컨테이너를 만들어 실행한다. 이때 환경 변수로 DATABASE_URL, DATABASE_ID, DATABASE_PASSWORD, SERVER_ENV, FILE_DIR를 주입해줘야 한다.

```
sudo docker run -d -p 8080:8080 --env DATABASE_URL=172.17.0.1 --env DATABASE_ID=ssafy --env DATABASE_PASSWORD=ssafy --env SERVER_ENV=production --env FILE_DIR=/workspace/files --name dearmybaby-backend dearmybaby-backend:latest
```
