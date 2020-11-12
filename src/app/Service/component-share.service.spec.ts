import { TestBed } from '@angular/core/testing';

import { ComponentShareService } from './component-share.service';

describe('ComponentShareService', () => {
  let service: ComponentShareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComponentShareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
