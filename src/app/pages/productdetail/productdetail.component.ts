import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


import { Product } from 'src/app/common/product';
import { ProductService } from 'src/app/common/product.service';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {
  quantity = 1;

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  increaseQuantity() {
    if (this.quantity < 10) {
      this.quantity++;
    }
  }

  product: Product = {} as Product;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit() {
    
    this.route.paramMap.subscribe(params => {
      const productId = params.get('id');
      const products = this.productService.getProducts();
      const product = products.find(product => product.id === (productId ? parseInt(productId) : null));

      if (product) {
        this.product = product;
      } else {
        // Xử lý trường hợp không tìm thấy sản phẩm
        console.log('Không tìm thấy sản phẩm');
      }
    });
    
  }
  
}
