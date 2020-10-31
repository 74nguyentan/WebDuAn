import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeenProductComponent } from './seen-product.component';

describe('SeenProductComponent', () => {
  let component: SeenProductComponent;
  let fixture: ComponentFixture<SeenProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeenProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeenProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
