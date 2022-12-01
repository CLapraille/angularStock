import { TestBed } from '@angular/core/testing';

import { TrackedStockService } from './tracked-stock.service';

describe('TrackedStockService', () => {
  let service: TrackedStockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrackedStockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
