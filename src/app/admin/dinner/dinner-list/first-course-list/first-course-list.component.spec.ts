import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstCourseListComponent } from './first-course-list.component';

describe('FirstCourseListComponent', () => {
  let component: FirstCourseListComponent;
  let fixture: ComponentFixture<FirstCourseListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstCourseListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstCourseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
