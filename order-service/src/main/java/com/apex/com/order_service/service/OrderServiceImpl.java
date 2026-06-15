package com.apex.com.order_service.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClient;

import com.apex.com.order_service.config.ServiceProperties;
import com.apex.com.order_service.dto.OrderRequestDto;
import com.apex.com.order_service.dto.UserDto;
import com.apex.com.order_service.entities.Order;
import com.apex.com.order_service.repo.OrderRepo;

import lombok.RequiredArgsConstructor;


@Service
@RequiredArgsConstructor
public class OrderServiceImpl implements OrderService{

    private final OrderRepo orderRepo;
    private final ServiceProperties serviceProperties;
    private final RestClient.Builder builder;

    @Override
    public List<Order> getAllOrders() {

        
        return orderRepo.findAll();    
    }

    @Override
    public Order createOrder(String authHeader, OrderRequestDto orderRequestDto) {
        

        String userServiceUrl = serviceProperties.getUser().getUrl();
        // call the User-Service to get the user information
        RestClient client = builder.baseUrl(userServiceUrl).build();


        UserDto user = client.get()
                            .uri("/api/v1/users/me")
                            .header("Authorization", authHeader)
                            .retrieve().body(UserDto.class);
        
        Order order = new Order();
        order.setName(user.name());
        order.setEmail(user.email()); 
        order.setProductId(orderRequestDto.getProductId());
        order.setProductName(orderRequestDto.getProductName());
        order.setProductDescription(orderRequestDto.getProductDescription());
        order.setQuantity(orderRequestDto.getQuantity());
        return orderRepo.save(order);
    }

    
    
}
