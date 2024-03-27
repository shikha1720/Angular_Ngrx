import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { taskReducer } from './task.reducer';
import { TaskComponentsComponent } from './components/task-components/task-components.component';
import { AddTaskComponentsComponent } from './components/add-task-components/add-task-components.component';
import { UpdateTaskComponentsComponent } from './components/update-task-components/update-task-components.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponentsComponent,
    AddTaskComponentsComponent,
    UpdateTaskComponentsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot({'tasks':taskReducer}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
