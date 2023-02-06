//package com.ssafy.dmb.config;
//
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import springfox.documentation.builders.ApiInfoBuilder;
//import springfox.documentation.builders.PathSelectors;
//import springfox.documentation.builders.RequestHandlerSelectors;
//import springfox.documentation.service.ApiInfo;
//import springfox.documentation.spring.web.plugins.Docket;
//import springfox.documentation.service.Server;
//import springfox.documentation.spi.DocumentationType;
//
//import java.util.Collections;
//
//@Configuration
//public class SwaggerConfig {
//    @Bean
//    public Docket restAPI() {
//        Server serverLocal = new Server("local", "http://localhost:8081", "for local usages", Collections.emptyList(), Collections.emptyList());
//        Server testServer = new Server("test", "https://i8a206.p.ssafy.io/", "for testing", Collections.emptyList(), Collections.emptyList());
//        return new Docket(DocumentationType.OAS_30)
//                .servers(serverLocal, testServer)
//                .apiInfo(apiInfo())
//                .select()
//                .apis(RequestHandlerSelectors.basePackage("j2kb.ponicon.scrap")) // 특정 패키지경로를 API문서화 한다. 1차 필터
//                .paths(PathSelectors.any()) // apis중에서 특정 path조건 API만 문서화 하는 2차 필터
//                .build()
//                .groupName("API 1.0.0") // group별 명칭을 주어야 한다.
//                .useDefaultResponseMessages(false); // 400,404,500 .. 표기를 ui에서 삭제한다.
//    }
//    private ApiInfo apiInfo() {
//        return new ApiInfoBuilder()
//                .title("Spring Boot REST API test")
//                .version("v0.0.1")
//                .description("스크랩 JPA swagger api 입니다.")
//                .build();
//    }
//}
