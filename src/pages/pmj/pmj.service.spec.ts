import { TestBed, inject } from '@angular/core/testing';

import { PmjService } from './pmj.service';

describe('PmjService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PmjService]
    });
  });

  it('should be created', inject([PmjService], (service: PmjService) => {
    expect(service).toBeTruthy();
  }));
});
