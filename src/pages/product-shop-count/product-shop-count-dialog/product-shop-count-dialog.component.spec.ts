import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductShopCountDialogComponent } from './product-shop-count-dialog.component';

describe('ProductShopCountDialogComponent', () => {
  let component: ProductShopCountDialogComponent;
  let fixture: ComponentFixture<ProductShopCountDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductShopCountDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductShopCountDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
