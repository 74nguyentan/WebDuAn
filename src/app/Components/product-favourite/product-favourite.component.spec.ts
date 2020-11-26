import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFavouriteComponent } from './product-favourite.component';

describe('ProductFavouriteComponent', () => {
  let component: ProductFavouriteComponent;
  let fixture: ComponentFixture<ProductFavouriteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductFavouriteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductFavouriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
