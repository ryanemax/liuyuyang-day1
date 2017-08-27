import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductShopCountEditComponent } from './product-shop-count-edit.component';

describe('ProductShopCountEditComponent', () => {
  let component: ProductShopCountEditComponent;
  let fixture: ComponentFixture<ProductShopCountEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductShopCountEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductShopCountEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
