import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DinnerComponentsListComponent } from './dinner-components-list.component';

describe('DinnerComponentsListComponent', () => {
  let component: DinnerComponentsListComponent;
  let fixture: ComponentFixture<DinnerComponentsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DinnerComponentsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DinnerComponentsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
