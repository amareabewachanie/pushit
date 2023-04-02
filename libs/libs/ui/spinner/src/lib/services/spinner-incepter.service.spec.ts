import { TestBed } from '@angular/core/testing';

import { SpinnerInterceptService } from './spinner-intercept.service';

describe('SpinnerIncepterService', () => {
  let service: SpinnerInterceptService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpinnerInterceptService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
