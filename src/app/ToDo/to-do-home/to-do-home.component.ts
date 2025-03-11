import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo.interface';
import { Store } from '@ngrx/store';
import { selectTodos } from '../store/todo.selectors';
import { TodoState } from '../store/todo.reducers';
import { ToDoService } from '../services/todo.service';
import { getTodos, deleteTodo } from '../store/todo.actions';

@Component({
  selector: 'app-to-do-home',
  templateUrl: './to-do-home.component.html',
  styleUrls: ['./to-do-home.component.css'],
  standalone: false,
})
export class ToDoHomeComponent {
  todos$: Observable<Todo[]>;

  constructor(
    private store: Store<{ todo: TodoState }>,
    private todoService: ToDoService
  ) {
    this.getTodos();
    this.todos$ = this.store.select(selectTodos);
  }

  getTodos() {
    this.store.dispatch(getTodos());
  }

  deleteTodo(id: number) {
    this.store.dispatch(deleteTodo({ id }));
  }
}
