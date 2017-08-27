import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductShopCountListComponent } from './product-shop-count-list.component';

describe('ProductShopCountListComponent', () => {
  let component: ProductShopCountListComponent;
  let fixture: ComponentFixture<ProductShopCountListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductShopCountListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductShopCountListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
