import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopImpormationComponent } from './shop-impormation.component';

describe('ShopImpormationComponent', () => {
  let component: ShopImpormationComponent;
  let fixture: ComponentFixture<ShopImpormationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopImpormationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopImpormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
