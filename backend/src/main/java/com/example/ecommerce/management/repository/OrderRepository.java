package com.example.ecommerce.management.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.ecommerce.management.entity.Order;

public interface OrderRepository extends JpaRepository<Order, Integer> {
}