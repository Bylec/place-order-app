import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DinnerDetailsComponent } from './dinner-details.component';

describe('DinnerDetailsComponent', () => {
  let component: DinnerDetailsComponent;
  let fixture: ComponentFixture<DinnerDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DinnerDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DinnerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
