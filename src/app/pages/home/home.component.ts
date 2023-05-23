import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { products } from '../../datas/product';
import { Product } from '../../common/product';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CarouselComponent } from 'ngx-owl-carousel-o';

declare var $: any; // Declare the jQuery variable
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  currentPage: number = 1; // Trang hiện tại
  itemsPerPage: number = 12; // Số sản phẩm trên mỗi trang
  products = products; // Danh sách tất cả sản phẩm
  constructor(private router: Router) { }

  viewProductDetail(product: Product) {
    this.router.navigate(['/products', product.id]);
  }
  get totalPages(): number {
    return Math.ceil(this.products.length / this.itemsPerPage);
  }

  get pagedProducts(): any[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.products.slice(startIndex, endIndex);
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }
  getPageNumbers(): number[] {
    return Array.from({ length: this.totalPages }, (_, index) => index + 1);
  }

  customOptions: OwlOptions = {
    loop: true,
    margin: 0,
    // nav: true,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },

  }
  @ViewChild('carousel', { static: true }) carouselElement!: ElementRef;

  ngOnInit(): void {
    $(this.carouselElement.nativeElement).carousel({
      interval: 2000,
      pause: 'hover',
      wrap: true
    });
  }

}
