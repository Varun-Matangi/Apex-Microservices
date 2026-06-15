package com.apex.com.order_service.config;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

import lombok.Getter;
import lombok.Setter;

@Component
@ConfigurationProperties(prefix = "services")
@Getter
@Setter
public class ServiceProperties {
   private User user;

    @Getter
    @Setter
    public static class User {
        private String url;
    } 
}
