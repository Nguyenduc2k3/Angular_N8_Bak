import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  updateCartItems(cartItems: any[]) {
    throw new Error('Method not implemented.');
  }
  private cartItems: any[] = [];

  constructor() {
    // Load cart items from localStorage if available
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      this.cartItems = JSON.parse(storedCartItems);
    }
  }

  addToCart(product: any) {
    this.cartItems.push(product);
    // Save updated cart items to localStorage
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
  }

  getCartItems() {
    return this.cartItems;
  }

  clearCart() {
    this.cartItems = [];
    // Remove cart items from localStorage
    localStorage.removeItem('cartItems');
  }
}
