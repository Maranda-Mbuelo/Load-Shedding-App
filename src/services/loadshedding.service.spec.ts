import { TestBed } from '@angular/core/testing';

import { LoadsheddingService } from './loadshedding.service';

describe('LoadsheddingService', () => {
  let service: LoadsheddingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadsheddingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
