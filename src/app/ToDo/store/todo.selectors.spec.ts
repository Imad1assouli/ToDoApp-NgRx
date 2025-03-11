import { selectTodos, selectError, selectTodosCount } from './todo.selectors';
import { TodoState } from './todo.reducers';

describe('Todo Selectors', () => {
  const initialState: TodoState = {
    todos: [
      { id: 1, title: 'Test1' },
      { id: 2, title: 'Test2' }
    ],
    error: ''
  };

  it('should select todos', () => {
    const result = selectTodos.projector(initialState);
    expect(result).toEqual(initialState.todos);
  });

  it('should select error', () => {
    const result = selectError.projector(initialState);
    expect(result).toBe('');
  });

  it('should select todos count', () => {
    const result = selectTodosCount.projector(initialState);
    expect(result).toBe(2);
  });
});
