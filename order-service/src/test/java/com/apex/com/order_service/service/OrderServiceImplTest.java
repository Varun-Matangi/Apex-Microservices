package com.apex.com.order_service.service;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import static org.mockito.Mockito.any;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.web.client.RestClient;

import com.apex.com.order_service.config.ServiceProperties;
import com.apex.com.order_service.dto.OrderRequestDto;
import com.apex.com.order_service.dto.UserDto;
import com.apex.com.order_service.entities.Order;
import com.apex.com.order_service.repo.OrderRepo;


@ExtendWith(MockitoExtension.class)
public class OrderServiceImplTest {
     @Mock
    private OrderRepo orderRepo;

    @Mock
    private ServiceProperties serviceProperties;

    @Mock
    private RestClient.Builder builder;

    @InjectMocks
    private OrderServiceImpl orderService;

    
    @Mock
    private RestClient restClient;

    @SuppressWarnings("rawtypes")
    @Mock
    private RestClient.RequestHeadersUriSpec requestHeadersUriSpec;

    @SuppressWarnings("rawtypes")
    @Mock
    private RestClient.RequestHeadersSpec requestHeadersSpec;

    @Mock
    private RestClient.ResponseSpec responseSpec;


    @Test
    void shouldReturnAllOrders() {

        Order order = new Order();
        order.setProductName("Laptop");

        when(orderRepo.findAll())
                .thenReturn(List.of(order));

        List<Order> orders = orderService.getAllOrders();

        assertEquals(1, orders.size());
        assertEquals("Laptop", orders.get(0).getProductName());

        verify(orderRepo, times(1)).findAll();
    }


    @SuppressWarnings("unchecked")
    @Test
    void shouldCreateOrder() {

        OrderRequestDto requestDto = new OrderRequestDto(
                "P001",
                "Laptop",
                "Gaming Laptop",
                2
        );

        UserDto userDto = new UserDto(
                "JohnDoe",
                "johndoe@gmail.com"
        );

        Order savedOrder = new Order();
        savedOrder.setName("JohnDoe");
        savedOrder.setEmail("johndoe@gmail.com");
        savedOrder.setProductId("P001");
        savedOrder.setProductName("Laptop");
        savedOrder.setProductDescription("Gaming Laptop");
        savedOrder.setQuantity(2);

        ServiceProperties.User userConfig =
                mock(ServiceProperties.User.class);

        when(serviceProperties.getUser())
                .thenReturn(userConfig);

        when(userConfig.getUrl())
                .thenReturn("http://user-service");

        when(builder.baseUrl(anyString()))
                .thenReturn(builder);

        when(builder.build())
                .thenReturn(restClient);

        when(restClient.get())
                .thenReturn(requestHeadersUriSpec);

        when(requestHeadersUriSpec.uri("/api/v1/users/me"))
                .thenReturn(requestHeadersSpec);

        when(requestHeadersSpec.header(anyString(), anyString()))
                .thenReturn(requestHeadersSpec);

        when(requestHeadersSpec.retrieve())
                .thenReturn(responseSpec);

        when(responseSpec.body(UserDto.class))
                .thenReturn(userDto);

        when(orderRepo.save(any(Order.class)))
                .thenReturn(savedOrder);

        Order result = orderService.createOrder(
                "Bearer token",
                requestDto
        );

        assertEquals("JohnDoe", result.getName());
        assertEquals("johndoe@gmail.com", result.getEmail());
        assertEquals("Laptop", result.getProductName());

        verify(orderRepo).save(any(Order.class));
    }
}
