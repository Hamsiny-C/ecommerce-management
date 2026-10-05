package com.example.ecommerce.management.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.ecommerce.management.entity.Review;
import com.example.ecommerce.management.repository.ReviewRepository;

@Service
public class ReviewService {

    private final ReviewRepository reviewRepository;

    public ReviewService(ReviewRepository reviewRepository) {
        this.reviewRepository = reviewRepository;
    }

    public List<Review> getReviewsByProduct(Integer productId) {
        return reviewRepository.findByProductProductId(productId);
    }

    public Review saveReview(Review review) {
        return reviewRepository.save(review);
    }

    public void deleteReview(Integer id) {
        reviewRepository.deleteById(id);
    }
}