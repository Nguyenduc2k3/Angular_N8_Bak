import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cart } from '../common/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private apiUrl = 'http://localhost:8088/api/cart/';
  
  private cartItems: any[] = [];

  constructor(private http: HttpClient) {}

  addToCart(product: any) {
    // Add item to the local cartItems array
    this.cartItems.push(product);

    // Make HTTP POST request to add item to the cart API
    this.http.post('http://localhost:8088/api/cart', product).subscribe(
      () => {
        console.log('Product added to cart API successfully!');
      },
      (error) => {
        console.error('Failed to add product to cart API:', error);
        // Remove the item from the local cartItems array on API failure
        this.cartItems.pop();
      }
    );
  }

  

  getData(): Observable<Cart[]> {
    return this.http.get<any>(this.apiUrl); // Gửi yêu cầu GET đến API
  }


  clearCart() {
    this.cartItems = [];
  }
}
