import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistDialogComponent } from './regist-dialog.component';

describe('RegistDialogComponent', () => {
  let component: RegistDialogComponent;
  let fixture: ComponentFixture<RegistDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
