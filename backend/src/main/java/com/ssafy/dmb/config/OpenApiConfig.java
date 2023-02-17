package com.ssafy.dmb.config;

import io.swagger.v3.oas.models.Components;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

// Swagger 접속 URL
// http://localhost:8080/swagger-ui/index.html
@Configuration
public class OpenApiConfig {

    @Bean
    public OpenAPI openAPI() {
        Info info = new Info()
                .title("dearmybaby")
                .version("1.6.7")
                .description("dearmybaby API");

        return new OpenAPI()
                .components(new Components())
                .info(info);
    }
}