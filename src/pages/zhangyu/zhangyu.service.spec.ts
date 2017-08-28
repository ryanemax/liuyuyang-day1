import { TestBed, inject } from '@angular/core/testing';

import { ZhangyuService } from './zhangyu.service';

describe('ZhangyuService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ZhangyuService]
    });
  });

  it('should be created', inject([ZhangyuService], (service: ZhangyuService) => {
    expect(service).toBeTruthy();
  }));
});
