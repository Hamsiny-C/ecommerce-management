package com.example.ecommerce.management.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.ecommerce.management.entity.OrderItem;

public interface OrderItemRepository extends JpaRepository<OrderItem, Integer> {
}