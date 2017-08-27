import { TestBed, inject } from '@angular/core/testing';

import { CardPreviewService } from './card-preview.service';

describe('CardPreviewService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CardPreviewService]
    });
  });

  it('should be created', inject([CardPreviewService], (service: CardPreviewService) => {
    expect(service).toBeTruthy();
  }));
});
