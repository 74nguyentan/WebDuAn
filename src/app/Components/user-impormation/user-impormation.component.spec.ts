import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserImpormationComponent } from './user-impormation.component';

describe('UserImpormationComponent', () => {
  let component: UserImpormationComponent;
  let fixture: ComponentFixture<UserImpormationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserImpormationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserImpormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
