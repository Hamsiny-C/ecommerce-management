package com.example.ecommerce.management.repository;

import org.springframework.stereotype.Repository;

import jakarta.persistence.EntityManager;
import jakarta.persistence.ParameterMode;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.StoredProcedureQuery;

@Repository
public class OrderProcedureRepository {

    @PersistenceContext
    private EntityManager entityManager;

    public void createOrder(Integer customerId, Integer productId, Integer quantity) {

        StoredProcedureQuery query =
                entityManager.createStoredProcedureQuery("CREATE_ORDER");

        query.registerStoredProcedureParameter(
                "p_customer_id",
                Integer.class,
                ParameterMode.IN
        );

        query.registerStoredProcedureParameter(
                "p_product_id",
                Integer.class,
                ParameterMode.IN
        );

        query.registerStoredProcedureParameter(
                "p_quantity",
                Integer.class,
                ParameterMode.IN
        );

        query.setParameter("p_customer_id", customerId);
        query.setParameter("p_product_id", productId);
        query.setParameter("p_quantity", quantity);

        query.execute();
    }
}