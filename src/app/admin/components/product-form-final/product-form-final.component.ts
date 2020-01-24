import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { MyValidators } from './../../../utils/validators';
import { ProductsService } from './../../../core/services/products/products.service';

@Component({
  selector: 'app-product-form-final',
  templateUrl: './product-form-final.component.html',
  styleUrls: ['./product-form-final.component.scss']
})
export class ProductFormFinalComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductsService,
    private router: Router
  ) {
    this.buildForm();
  }

  ngOnInit() {
  }

  saveProduct(event) {
    event.preventDefault();
    if (this.form.valid) {
      const product = this.form.value;
      this.productService.createProduct(product)
        .subscribe(response => {
          console.log(response);
          this.router.navigate(['/admin/products']);
        })
    }
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      id: ['', [Validators.required]],
      title: ['', [Validators.required]],
      price: ['', [Validators.required, MyValidators.isPriceValid]],
      image: 'https://i01.appmifile.com/webfile/globalimg/products/pc/mi-9-lite/summary-new_12.jpg',
      description: ['', [Validators.required]],
    });
  }

  get priceField() {
    return this.form.get('price');
  }


}
