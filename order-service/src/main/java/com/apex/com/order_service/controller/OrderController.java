package com.apex.com.order_service.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/orders")
public class OrderController {
    
    @GetMapping
    public ResponseEntity<String> greet(){
        return  new ResponseEntity("From Order Controller",HttpStatus.OK);
    }
}
