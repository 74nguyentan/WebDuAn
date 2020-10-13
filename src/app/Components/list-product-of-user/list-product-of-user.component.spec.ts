import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProductOfUserComponent } from './list-product-of-user.component';

describe('ListProductOfUserComponent', () => {
  let component: ListProductOfUserComponent;
  let fixture: ComponentFixture<ListProductOfUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListProductOfUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProductOfUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
