package com.example.ecommerce.management.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.ecommerce.management.entity.Customer;

public interface CustomerRepository extends JpaRepository<Customer, Integer> {
}