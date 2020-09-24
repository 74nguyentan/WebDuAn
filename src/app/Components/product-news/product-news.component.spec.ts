import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductNewsComponent } from './product-news.component';

describe('ProductNewsComponent', () => {
  let component: ProductNewsComponent;
  let fixture: ComponentFixture<ProductNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
