import { TestBed, inject } from '@angular/core/testing';

import { BetsyAccountService } from './betsy-account.service';

describe('BetsyAccountService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BetsyAccountService]
    });
  });

  it('should be created', inject([BetsyAccountService], (service: BetsyAccountService) => {
    expect(service).toBeTruthy();
  }));
});
