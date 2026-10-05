package com.example.ecommerce.management.controller;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.ecommerce.management.entity.Wishlist;
import com.example.ecommerce.management.service.WishlistService;

@RestController
@RequestMapping("/api/wishlist")
public class WishlistController {

    private final WishlistService wishlistService;

    public WishlistController(WishlistService wishlistService) {
        this.wishlistService = wishlistService;
    }

    @GetMapping("/customer/{customerId}")
    public List<Wishlist> getWishlistByCustomer(
            @PathVariable Integer customerId) {
        return wishlistService.getWishlistByCustomer(customerId);
    }

    @PostMapping
    public Wishlist addToWishlist(@RequestBody Wishlist wishlist) {
        return wishlistService.saveWishlist(wishlist);
    }

    @DeleteMapping("/{id}")
    public void removeFromWishlist(@PathVariable Integer id) {
        wishlistService.deleteWishlist(id);
    }
}