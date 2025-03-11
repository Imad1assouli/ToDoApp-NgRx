import { TodoReducer, initialState } from './todo.reducers';
import * as TodoActions from './todo.actions';
import { Todo } from '../models/todo.interface';

describe('TodoReducer', () => {
  it('should return initial state', () => {
    const action = { type: 'NOOP' } as any;
    const state = TodoReducer(undefined, action);

    expect(state).toBe(initialState);
  });

  it('should handle loadTodosSuccess', () => {
    const todos: Todo[] = [{ id: 1, title: 'Test' }];
    const action = TodoActions.loadTodosSuccess({ todos });
    const state = TodoReducer(initialState, action);

    expect(state.todos).toEqual(todos);
    expect(state.error).toBe('');
  });

  it('should handle loadTodosFailure', () => {
    const error = 'Test error';
    const action = TodoActions.loadTodosFailure({ error });
    const state = TodoReducer(initialState, action);

    expect(state.error).toBe(error);
  });
});
