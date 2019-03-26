import { TestBed } from '@angular/core/testing';

import { ShowInterestService } from './show-interest.service';

describe('ShowInterestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShowInterestService = TestBed.get(ShowInterestService);
    expect(service).toBeTruthy();
  });
});
