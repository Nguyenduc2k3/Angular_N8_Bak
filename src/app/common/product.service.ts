import { Injectable } from '@angular/core';
import { Inject } from '@angular/core';

import { Product } from './product';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    private products: Product[] = [
        {
            id: 1,
            name: "iPhone 14 Pro Max",
            price: 100,
            desc: "Mo ta san pham",
            brand: "Apple",
            imgUrl: "https://shopdunk.com/images/thumbs/0007808_iphone-14-pro-max-128gb.png"
        },
        {
            id: 2,
            name: "Xiaomi 13 Pro",
            price: 200,
            desc: "Mo ta san pham",
            brand: "Xiaomi",
            imgUrl: "https://cdn.tgdd.vn/Products/Images/42/282903/xiaomi-13-pro-thumb-1-2-600x600.jpg"
        },
        {
            id: 3,
            name: "Samsung S23 Ultra",
            price: 300,
            desc: "Mo ta san pham",
            brand: "Samsung",
            imgUrl: "https://cdn.tgdd.vn/Products/Images/42/249948/samsung-galaxy-s23-ultra-1-600x600.jpg"
        },
        {
            id: 4,
            name: "iPhone 14 Pro Max",
            price: 100,
            desc: "Mo ta san pham",
            brand: "Apple",
            imgUrl: "https://shopdunk.com/images/thumbs/0007808_iphone-14-pro-max-128gb.png"
        },
        {
            id: 5,
            name: "Xiaomi 13 Pro",
            price: 200,
            desc: "Mo ta san pham",
            brand: "Xiaomi",
            imgUrl: "https://cdn.tgdd.vn/Products/Images/42/282903/xiaomi-13-pro-thumb-1-2-600x600.jpg"
        },
        {
            id: 6,
            name: "Samsung S23 Ultra",
            price: 300,
            desc: "Mo ta san pham",
            brand: "Samsung",
            imgUrl: "https://cdn.tgdd.vn/Products/Images/42/249948/samsung-galaxy-s23-ultra-1-600x600.jpg"
        }

    ];

    constructor() {
        // ...
    }

    getProducts(): Product[] {
        return this.products;
    }

}
