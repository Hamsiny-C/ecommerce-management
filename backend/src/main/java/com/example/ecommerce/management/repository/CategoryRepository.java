package com.example.ecommerce.management.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.ecommerce.management.entity.Category;

public interface CategoryRepository extends JpaRepository<Category, Integer> {

}