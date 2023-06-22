import { TestBed } from '@angular/core/testing';

import { RevnueStreamService } from './revnue-stream.service';

describe('RevnueStreamService', () => {
  let service: RevnueStreamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RevnueStreamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
