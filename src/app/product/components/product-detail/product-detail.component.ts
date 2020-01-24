import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from './../../../core/services/products/products.service';
import { Product } from '../../product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.fetchProduct(id);
    });
  }

  fetchProduct(id: string) {
    this.productService.getProduct(id)
      .subscribe(productRequired => {
        console.log(productRequired);
        this.product = productRequired;
      });
  }

  createProduct() {

    const product: Product = {
      id: '77',
      title: "new product",
      image: "https://i01.appmifile.com/webfile/globalimg/products/pc/mi-9-lite/summary-new_12.jpg",
      price: 70000,
      description: "la la la la la"
    }

    this.productService.createProduct(product)
      .subscribe(newProduct => {
        console.log(newProduct);
      })
  }

  updateProduct() {
    const updateProduct: Partial<Product> = {
      price: 80000,
      description: "new Smarthphone"
    }

    this.productService.updateProduct('77', updateProduct)
      .subscribe(updatedProduct => {
        console.log(updatedProduct);
      })
  }
  deleteProduct() {
    this.productService.deleteProduct('12')
      .subscribe(deletedProduct => {
        console.log(deletedProduct);
      })
  }

}
