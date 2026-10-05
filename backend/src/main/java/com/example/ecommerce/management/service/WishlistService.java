package com.example.ecommerce.management.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.ecommerce.management.entity.Wishlist;
import com.example.ecommerce.management.repository.WishlistRepository;

@Service
public class WishlistService {

    private final WishlistRepository wishlistRepository;

    public WishlistService(WishlistRepository wishlistRepository) {
        this.wishlistRepository = wishlistRepository;
    }

    public List<Wishlist> getWishlistByCustomer(Integer customerId) {
        return wishlistRepository.findByCustomerCustomerId(customerId);
    }

    public Wishlist saveWishlist(Wishlist wishlist) {
        return wishlistRepository.save(wishlist);
    }

    public void deleteWishlist(Integer id) {
        wishlistRepository.deleteById(id);
    }
}