package com.apex.com.order_service.service;

import java.util.List;

import com.apex.com.order_service.dto.OrderRequestDto;
import com.apex.com.order_service.entities.Order;

public interface OrderService {

    List<Order> getAllOrders();

    Order createOrder(String authHeader,OrderRequestDto orderRequestDto);
    
}
