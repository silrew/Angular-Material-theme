import { TestBed } from '@angular/core/testing';

import { SalesRecordsService } from './sales-records.service';

describe('SalesRecordsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SalesRecordsService = TestBed.get(SalesRecordsService);
    expect(service).toBeTruthy();
  });
});
