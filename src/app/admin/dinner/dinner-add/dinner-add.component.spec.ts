import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DinnerAddComponent } from './dinner-add.component';

describe('DinnerAddComponent', () => {
  let component: DinnerAddComponent;
  let fixture: ComponentFixture<DinnerAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DinnerAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DinnerAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
