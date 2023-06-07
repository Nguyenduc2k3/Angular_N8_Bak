import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from 'src/app/common/product';
import { DataService } from 'src/app/datas/data.service';


@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {
  quantity = 1;
  product!: Product;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const productId = params.get('id')!;
      this.dataService.getProduct(productId).subscribe(
        product => {
          this.product = product;
        },
        error => {
          console.log('Error retrieving product:', error);
        }
      );
    });
  }

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
}
