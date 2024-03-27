import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from './task.model';
import { Store } from '@ngrx/store';
import { AppState } from './task.reducer';
import * as selector from 'src/app/task.selector'; 


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasks:Task[] = [];

  constructor( private store:Store<AppState>,){
    this.store.select(selector.selectTasks).subscribe(tasks=>this.tasks=tasks);
  }
}
