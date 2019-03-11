import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsListItemComponent } from './components-list-item.component';

describe('ComponentsListItemComponent', () => {
  let component: ComponentsListItemComponent;
  let fixture: ComponentFixture<ComponentsListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentsListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentsListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
