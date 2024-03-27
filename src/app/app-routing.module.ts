import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTaskComponentsComponent } from './components/add-task-components/add-task-components.component';
import { UpdateTaskComponentsComponent } from './components/update-task-components/update-task-components.component';
import { TaskComponentsComponent } from './components/task-components/task-components.component';

const routes: Routes = [
  {path:'tasks',component:TaskComponentsComponent},
  {path:'tasks/add',component:AddTaskComponentsComponent},
  {path:'tasks/update/:id',component:UpdateTaskComponentsComponent},
  {path:'',redirectTo:'/tasks',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
