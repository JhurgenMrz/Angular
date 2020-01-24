import { Component, OnInit } from '@angular/core';

import { ProductsService } from './../../../core/services/products/products.service';
import { Product } from '../../../core/models/product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  constructor(
    private productService: ProductsService
  ) { }

  products: Product[] = [];
  displayedColumns: string[] = ["id", "title", "price", "actions"];

  ngOnInit() {
    this.fetchProducts();
  }

  fetchProducts() {
    this.productService.getAllProducts()
      .subscribe(products => {
        console.log(products);
        this.products = products;
      });
  }

  deleteProduct(id: string) {
    this.productService.deleteProduct(id)
      .subscribe(response => {
        if (response) {
          let productsRequired = this.products.filter(prod => prod.id !== id);
          this.products = productsRequired;
        }
      })
    // this.fetchProducts();
  }

}
