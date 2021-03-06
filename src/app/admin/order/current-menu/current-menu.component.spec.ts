import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentMenuComponent } from './current-menu.component';

describe('CurrentMenuComponent', () => {
  let component: CurrentMenuComponent;
  let fixture: ComponentFixture<CurrentMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
