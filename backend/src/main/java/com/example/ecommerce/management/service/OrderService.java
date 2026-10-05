package com.example.ecommerce.management.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.ecommerce.management.entity.Order;
import com.example.ecommerce.management.repository.OrderProcedureRepository;
import com.example.ecommerce.management.repository.OrderRepository;
@Service
public class OrderService {

    private final OrderRepository orderRepository;
    private final OrderProcedureRepository orderProcedureRepository;

    public OrderService(
            OrderRepository orderRepository,
            OrderProcedureRepository orderProcedureRepository) {

        this.orderRepository = orderRepository;
        this.orderProcedureRepository = orderProcedureRepository;
    }

    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }

    public Order getOrderById(Integer id) {
        return orderRepository.findById(id).orElse(null);
    }

    public Order saveOrder(Order order) {
        return orderRepository.save(order);
    }

    public void deleteOrder(Integer id) {
        orderRepository.deleteById(id);
    }

   
    public void createOrder(Integer customerId, Integer productId, Integer quantity) {

        orderProcedureRepository.createOrder(
                customerId,
                productId,
                quantity
        );
    }
}