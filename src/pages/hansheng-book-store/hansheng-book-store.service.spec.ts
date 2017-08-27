import { TestBed, inject } from '@angular/core/testing';

import { HanshengBookStoreService } from './hansheng-book-store.service';

describe('HanshengBookStoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HanshengBookStoreService]
    });
  });

  it('should be created', inject([HanshengBookStoreService], (service: HanshengBookStoreService) => {
    expect(service).toBeTruthy();
  }));
});
