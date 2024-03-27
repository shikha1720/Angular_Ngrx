import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskComponentsComponent } from './task-components.component';

describe('TaskComponentsComponent', () => {
  let component: TaskComponentsComponent;
  let fixture: ComponentFixture<TaskComponentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskComponentsComponent]
    });
    fixture = TestBed.createComponent(TaskComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
