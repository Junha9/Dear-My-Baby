# nginx 이미지를 사용
FROM nginx:stable-alpine

# root에 app 폴더 생성
RUN mkdir /app

# work dir 고정
WORKDIR /app

# work dir 에 dist 폴더 생성
RUN mkdir ./dist

# host pc의 현재경로의 dist 폴더를 work dir 의 dist 폴더로 복사
ADD ./dist ./dist

# nginx 의 deafult.conf를 삭제
RUN rm /etc/nginx/conf.d/default.conf

# host pc 의 default.conf 를 아래 경로에 복사
COPY ./nginx.conf /etc/nginx/conf.d

# 8080 포트 오픈
EXPOSE 8080

# container 실행 시 자동으로 실행할 command. nginx 시작함
CMD ["nginx", "-g", "daemon off;"]
