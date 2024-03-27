import { createReducer, on} from '@ngrx/store';
import { Task } from './task.model';
import { addTask, deleteTask, updateTask } from './task.action';

export interface AppState{
  tasks:Task[];
}

export const initialState:AppState = {
  tasks: []
}

export const taskReducer = createReducer(initialState,
  on(addTask,(state,{task}) => ({...state,tasks: [...state.tasks,task]})),
  on(updateTask,(state,{task}) => ({...state,tasks: state.tasks.map(t => t.id===task.id?task:t)})),
  on(deleteTask,(state,{id}) => ({...state,tasks: state.tasks.filter(task=> task.id!==id)}))
  );