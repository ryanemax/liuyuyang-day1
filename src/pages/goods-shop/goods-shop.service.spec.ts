import { TestBed, inject } from '@angular/core/testing';

import { GoodsShopService } from './goods-shop.service';

describe('GoodsShopService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GoodsShopService]
    });
  });

  it('should be created', inject([GoodsShopService], (service: GoodsShopService) => {
    expect(service).toBeTruthy();
  }));
});
