import { TestBed, inject } from '@angular/core/testing';

import { ProductShopCountService } from './product-shop-count.service';

describe('ProductShopCountService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductShopCountService]
    });
  });

  it('should be created', inject([ProductShopCountService], (service: ProductShopCountService) => {
    expect(service).toBeTruthy();
  }));
});
