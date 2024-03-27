import { Component, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { updateTask } from 'src/app/task.action';
import { Task } from 'src/app/task.model';
import { AppState } from 'src/app/task.reducer';
import * as selector from 'src/app/task.selector'; 


@Component({
  selector: 'app-update-task-components',
  templateUrl: './update-task-components.component.html',
  styleUrls: ['./update-task-components.component.css']
})
export class UpdateTaskComponentsComponent {
  protected id : any;
  tasks:Task[]=[];
  updateTaskForm: FormGroup;
  protected task: any;

  constructor(private route: ActivatedRoute,
              private fb:FormBuilder,
              private store:Store<AppState>,
              private router:Router){
    this.store.select(selector.selectTasks).subscribe(tasks=>this.tasks=tasks);
    this.id = this.route.snapshot.paramMap.get('id');
    this.task = this.tasks.find(task => task.id === +this.id);

    this.updateTaskForm = fb.group({
      id: this.task.id,
      title: fb.control(this.task.title,[Validators.required]),
      description: fb.control(this.task.description,[Validators.required])
    })
  }

  updateTask(){
    this.store.dispatch(updateTask({task:this.updateTaskForm.value}))
    this.router.navigateByUrl('/tasks');
  }

  get Title(): FormControl {
    return this.updateTaskForm.get('title') as FormControl;
  }
  get Description(): FormControl {
    return this.updateTaskForm.get('description') as FormControl;
  }

}
