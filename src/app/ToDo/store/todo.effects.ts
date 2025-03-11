import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as TodoActions from './todo.actions';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ToDoService } from '../services/todo.service';

@Injectable()
export class TodoEffects {
  private readonly actions$ = inject(Actions);
  private readonly todoService = inject(ToDoService);

  loadTodos$ = createEffect(() => {
    return this.actions$.pipe(
      tap(action => console.log('Effect Action:', action)),
      ofType(TodoActions.getTodos),
      switchMap(() =>
        this.todoService.getTodos().pipe(
          tap(data => console.log('Service Response:', data)),
          map(todos => TodoActions.loadTodosSuccess({ todos })),
          catchError(error => {
            console.error('Effect Error:', error);
            return of(TodoActions.loadTodosFailure({ error: error.message }));
          })
        )
      )
    );
  });
}
