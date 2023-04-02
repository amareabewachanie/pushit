import { TestBed } from '@angular/core/testing';

import { SpinnerIndicatorService } from './spinner-indictor.service';

describe('SpinnerIndictorService', () => {
  let service: SpinnerIndicatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpinnerIndicatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
