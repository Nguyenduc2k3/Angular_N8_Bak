import { Component } from '@angular/core';
import { Product } from '../../common/product';
import { products } from '../../datas/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  products= products
}
