import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { deleteTask } from 'src/app/task.action';
import { Task } from 'src/app/task.model';
import { AppState } from 'src/app/task.reducer';
import * as selector from 'src/app/task.selector'; 


@Component({
  selector: 'app-task-components',
  templateUrl: './task-components.component.html',
  styleUrls: ['./task-components.component.css']
})
export class TaskComponentsComponent {
  tasks:Task[] = [];

  constructor(private store: Store<AppState>,
              private router: Router){
    this.store.select(selector.selectTasks).subscribe(tasks=>this.tasks=tasks);
  }

  deleteTask(id:number){
    this.store.dispatch(deleteTask({id}));
  }

  addTask(){
    this.router.navigateByUrl('tasks/add');
  }

  updateTask(id:number){
    this.router.navigateByUrl('tasks/update/' + id)
  }
}
