import { Injectable } from '@angular/core';
import { Inject } from '@angular/core';

import { Product } from './product';
import { products } from '../datas/product';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    private products = products


    constructor() {
        // ...
    }

    getProducts(): Product[] {
        return this.products;
    }

}
