import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { MyValidators } from './../../../utils/validators';
import { ProductsService } from './../../../core/services/products/products.service';


@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  form: FormGroup;
  id: string;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductsService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {
    this.buildForm();
  }

  ngOnInit() {
    this.activeRoute.params.subscribe((params: Params) => {
      this.id = params.id;
      this.productService.getProduct(this.id)
        .subscribe(product => {
          this.form.patchValue(product);
        })
    })
  }

  saveProduct(event) {
    event.preventDefault();
    if (this.form.valid) {
      const product = this.form.value;
      this.productService.updateProduct(this.id, product)
        .subscribe(response => {
          console.log(response);
          this.router.navigate(['/admin/products']);
        })
    }
  }

  private buildForm() {
    this.form = this.formBuilder.group({
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
