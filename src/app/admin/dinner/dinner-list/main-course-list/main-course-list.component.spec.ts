import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCourseListComponent } from './main-course-list.component';

describe('MainCourseListComponent', () => {
  let component: MainCourseListComponent;
  let fixture: ComponentFixture<MainCourseListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainCourseListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainCourseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
