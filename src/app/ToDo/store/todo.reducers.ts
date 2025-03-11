import { createReducer, on } from '@ngrx/store';
import { Todo } from '../models/todo.interface';
import { loadTodos, deleteTodo, errorTodo, loadTodosSuccess, loadTodosFailure } from './todo.actions';

export interface TodoState {
  todos: Todo[];
  error: string;
}

export const initialState: TodoState = {
  todos: [],
  error: '',
};

export const TodoReducer = createReducer(
  initialState,
  on(loadTodos, (state, action) => ({ ...state, todos: action.todos })),
  on(deleteTodo, (state, action) => ({
    ...state,
    todos: state.todos.filter(todo => todo.id !== action.id),
  })),
  on(errorTodo, (state, action) => ({
    ...state,
    error: action.message,
  })),
  on(loadTodosSuccess, (state, action) => ({
    ...state,
    todos: action.todos,
    error: '',  // Clear any previous error
  })),
  on(loadTodosFailure, (state, action) => ({
    ...state,
    error: action.error,
  }))
);
