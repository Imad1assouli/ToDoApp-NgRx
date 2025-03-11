import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of, throwError } from 'rxjs';
import { TodoEffects } from './todo.effects';
import { ToDoService } from '../services/todo.service';
import * as TodoActions from './todo.actions';
import { Todo } from '../models/todo.interface';

describe('TodoEffects', () => {
  let actions$: Observable<any>;
  let effects: TodoEffects;
  let todoService: jasmine.SpyObj<ToDoService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('ToDoService', ['getTodos', 'deleteTodo']);
    TestBed.configureTestingModule({
      providers: [
        TodoEffects,
        provideMockActions(() => actions$),
        { provide: ToDoService, useValue: spy }
      ]
    });

    effects = TestBed.inject(TodoEffects);
    todoService = TestBed.inject(ToDoService) as jasmine.SpyObj<ToDoService>;
  });

  describe('loadTodos$', () => {
    it('should return loadTodosSuccess with todos on success', (done) => {
      const mockTodos: Todo[] = [{ id: 1, title: 'Test Todo' }];
      actions$ = of(TodoActions.getTodos());
      todoService.getTodos.and.returnValue(of(mockTodos));

      effects.loadTodos$.subscribe(action => {
        expect(action).toEqual(TodoActions.loadTodosSuccess({ todos: mockTodos }));
        done();
      });
    });

    it('should return loadTodosFailure on error', (done) => {
      const error = new Error('Test error');
      actions$ = of(TodoActions.getTodos());
      todoService.getTodos.and.returnValue(throwError(() => error));

      effects.loadTodos$.subscribe(action => {
        expect(action).toEqual(TodoActions.loadTodosFailure({ error: error.message }));
        done();
      });
    });
  });
});
