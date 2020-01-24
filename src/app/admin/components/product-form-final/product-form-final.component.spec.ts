import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFormFinalComponent } from './product-form-final.component';

describe('ProductFormFinalComponent', () => {
  let component: ProductFormFinalComponent;
  let fixture: ComponentFixture<ProductFormFinalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductFormFinalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductFormFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
