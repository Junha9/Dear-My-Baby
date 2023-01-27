# Project Setting

## MySQL 연결

### 1. 프로젝트에 의존성 추가하기

```java
dependencies {
    implementation 'mysql:mysql-connector-java'
}
```

### 2. application.properties 에 DB 정보 추가하기

```java
# MySQL 설정
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
 
# DB Source URL
spring.datasource.url=jdbc:mysql://<IP>:<Port/<DB>?useSSL=false&useUnicode=true&serverTimezone=Asia/Seoul
 
# DB username
spring.datasource.username=<username>
 
# DB password
spring.datasource.password=<password>
 
# true 설정시 JPA 쿼리문 확인 가능
spring.jpa.show-sql=true
 
# DDL(create, alter, drop) 정의시 DB의 고유 기능을 사용할 수 있다.
spring.jpa.hibernate.ddl-auto=update
 
# JPA의 구현체인 Hibernate가 동작하면서 발생한 SQL의 가독성을 높여준다.
spring.jpa.properties.hibernate.format_sql=true
```
