package com.apex.com.order_service.repo;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.apex.com.order_service.entities.Order;

@Repository
public interface OrderRepo extends JpaRepository<Order, UUID> {
    
}
