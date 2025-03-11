import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Todo } from '../models/todo.interface';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {
  todos: Todo[] = [
    { id: 1, title: 'Task 1' },
    { id: 2, title: 'Task 2' },
    { id: 3, title: 'Task 3' }
  ];

  getTodos() {
    return of(this.todos);  // Ceci retourne un Observable, donc pas d'erreur ici.
  }

  addTodo(title: string) {
    const newTodo = { id: this.todos.length + 1, title };
    this.todos.push(newTodo);
    return of(newTodo);
  }

  deleteTodo(id: number) {
    const filteredTodos = this.todos.filter(t => t.id !== id);
    this.todos = filteredTodos;
    return of(undefined);
  }
}
