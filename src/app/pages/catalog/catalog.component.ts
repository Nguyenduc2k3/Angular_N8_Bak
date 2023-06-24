import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  products: any[] = []; // Initialize products as an empty array

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.dataService.getData().subscribe(
      (response: any) => {
        this.products = response; // Assign the response directly to 'products'
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
