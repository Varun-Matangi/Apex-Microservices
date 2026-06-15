package com.apex.com.order_service.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.apex.com.order_service.dto.OrderRequestDto;
import com.apex.com.order_service.entities.Order;
import com.apex.com.order_service.service.OrderService;

import lombok.RequiredArgsConstructor;


@CrossOrigin
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/orders")
public class OrderController {

    private final OrderService orderService;

    @GetMapping
    public ResponseEntity<List<Order>> getAllOrders(){
        List<Order> orders = orderService.getAllOrders();
        return  new ResponseEntity<>(orders,HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Order> createOrder(@RequestHeader("Authorization") String authHeader,@RequestBody OrderRequestDto orderRequestDto){
        Order order = orderService.createOrder(authHeader,orderRequestDto);
        return new ResponseEntity<>(order, HttpStatus.CREATED);
    }
}
