import { createAction, props } from '@ngrx/store';
import { Todo } from '../models/todo.interface';

export enum TodoActionTypes {
  GetAll = '[Todo] Get all todos',
  LoadTodos = '[Todo] Load todos',
  Add = '[Todo] Add',
  Delete = '[Todo] Delete',
  Error = '[Todo] Error',
  LoadTodosSuccess = '[Todo] Load Todos Success',  // Ajouté
  LoadTodosFailure = '[Todo] Load Todos Failure',  // Ajouté
}

export const getTodos = createAction(TodoActionTypes.GetAll);

export const loadTodos = createAction(
  TodoActionTypes.LoadTodos,
  props<{ todos: Todo[] }>()
);

export const addTodo = createAction(
  TodoActionTypes.Add,
  props<{ todo: Todo }>()
);

export const deleteTodo = createAction(
  TodoActionTypes.Delete,
  props<{ id: number }>()
);

export const errorTodo = createAction(
  TodoActionTypes.Error,
  props<{ message: string }>()
);

export const loadTodosSuccess = createAction(
  TodoActionTypes.LoadTodosSuccess,
  props<{ todos: Todo[] }>()
);

export const loadTodosFailure = createAction(
  TodoActionTypes.LoadTodosFailure,
  props<{ error: any }>()
);
