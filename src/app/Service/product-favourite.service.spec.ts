import { TestBed } from '@angular/core/testing';

import { ProductFavouriteService } from './product-favourite.service';

describe('ProductFavouriteService', () => {
  let service: ProductFavouriteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductFavouriteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
