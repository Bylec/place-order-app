import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DinnerEditComponent } from './dinner-edit.component';

describe('DinnerEditComponent', () => {
  let component: DinnerEditComponent;
  let fixture: ComponentFixture<DinnerEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DinnerEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DinnerEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
