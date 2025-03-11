import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TodoState } from './todo.reducers';

// SELECTORS
export const selectTodoState = createFeatureSelector<TodoState>('todo');
export const selectTodos = createSelector(selectTodoState, (state) => state.todos);
export const selectError = createSelector(selectTodoState, (state) => state.error);
export const selectTodosCount = createSelector(selectTodoState, (state) => state.todos.length);
