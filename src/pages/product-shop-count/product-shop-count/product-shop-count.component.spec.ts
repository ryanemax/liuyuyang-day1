import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductShopCountComponent } from './product-shop-count.component';

describe('ProductShopCountComponent', () => {
  let component: ProductShopCountComponent;
  let fixture: ComponentFixture<ProductShopCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductShopCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductShopCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
