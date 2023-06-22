import { TestBed } from '@angular/core/testing';

import { DomaincontrolService } from './domaincontrol.service';

describe('DomaincontrolService', () => {
  let service: DomaincontrolService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DomaincontrolService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
