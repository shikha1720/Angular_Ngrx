import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { addTask } from 'src/app/task.action';
import { Task } from 'src/app/task.model';
import { AppState } from 'src/app/task.reducer';
import * as selector from 'src/app/task.selector';

@Component({
  selector: 'app-add-task-components',
  templateUrl: './add-task-components.component.html',
  styleUrls: ['./add-task-components.component.css']
})
export class AddTaskComponentsComponent {
  addTaskForm: FormGroup;
  tasks:Task[] =[];

  constructor(private fb:FormBuilder, 
              private store:Store<AppState>,
              private router:Router){
    this.store.select(selector.selectTasks).subscribe(tasks => this.tasks=tasks);

    this.addTaskForm = fb.group({
      id: this.tasks.length + 1,
      title:fb.control("",[Validators.required]),
      description: fb.control("",[Validators.required])
    });
  }

  addTask(){
    this.store.dispatch(addTask({task:this.addTaskForm.value}));
    this.router.navigateByUrl('/tasks');
  }

  get Title(): FormControl {
    return this.addTaskForm.get('title') as FormControl;
  }
  get Description(): FormControl {
    return this.addTaskForm.get('description') as FormControl;
  }
}
