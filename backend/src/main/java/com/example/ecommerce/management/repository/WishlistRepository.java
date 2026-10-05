package com.example.ecommerce.management.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.ecommerce.management.entity.Wishlist;

public interface WishlistRepository extends JpaRepository<Wishlist, Integer> {

    List<Wishlist> findByCustomerCustomerId(Integer customerId);
}