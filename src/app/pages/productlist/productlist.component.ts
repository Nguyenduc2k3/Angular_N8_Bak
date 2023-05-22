import { Component } from '@angular/core';
import { Product } from '../../common/product';
import { Router } from '@angular/router';
import { products } from '../../datas/product';



@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent {
  products = products;
  constructor(private router: Router) { }

  viewProductDetail(product: Product) {
    this.router.navigate(['/products', product.id]);
  }
}
