import { TestBed } from '@angular/core/testing';

import { FinnhubQuoteService } from './finnhub-stock.service';

describe('FinnhubQuoteService', () => {
  let service: FinnhubQuoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FinnhubQuoteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
