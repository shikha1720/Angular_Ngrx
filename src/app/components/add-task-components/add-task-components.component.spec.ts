import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTaskComponentsComponent } from './add-task-components.component';

describe('AddTaskComponentsComponent', () => {
  let component: AddTaskComponentsComponent;
  let fixture: ComponentFixture<AddTaskComponentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddTaskComponentsComponent]
    });
    fixture = TestBed.createComponent(AddTaskComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
