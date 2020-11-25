import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitCardComponent } from './git-card.component';

describe('GitCardComponent', () => {
  let component: GitCardComponent;
  let fixture: ComponentFixture<GitCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
