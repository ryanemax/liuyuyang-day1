import { TestBed, inject } from '@angular/core/testing';

import { FastMailService } from './fast-mail.service';

describe('FastMailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FastMailService]
    });
  });

  it('should be created', inject([FastMailService], (service: FastMailService) => {
    expect(service).toBeTruthy();
  }));
});
