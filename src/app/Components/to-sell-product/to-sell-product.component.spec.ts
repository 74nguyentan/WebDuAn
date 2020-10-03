import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToSellProductComponent } from './to-sell-product.component';

describe('ToSellProductComponent', () => {
  let component: ToSellProductComponent;
  let fixture: ComponentFixture<ToSellProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToSellProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToSellProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
