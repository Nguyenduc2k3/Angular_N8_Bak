import { Component } from '@angular/core';
import { products } from 'src/app/datas/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  product = products
}
