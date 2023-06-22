import { TestBed } from '@angular/core/testing';

import { RaruleService } from './rarule.service';

describe('RaruleService', () => {
  let service: RaruleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RaruleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
