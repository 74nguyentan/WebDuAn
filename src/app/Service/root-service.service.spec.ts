import { TestBed } from '@angular/core/testing';

import { RootServiceService } from './root-service.service';

describe('RootServiceService', () => {
  let service: RootServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RootServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
