import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTaskComponentsComponent } from './update-task-components.component';

describe('UpdateTaskComponentsComponent', () => {
  let component: UpdateTaskComponentsComponent;
  let fixture: ComponentFixture<UpdateTaskComponentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateTaskComponentsComponent]
    });
    fixture = TestBed.createComponent(UpdateTaskComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
