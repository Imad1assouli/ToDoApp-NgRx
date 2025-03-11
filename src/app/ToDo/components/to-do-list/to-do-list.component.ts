import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../../models/todo.interface';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css'],
  standalone: false,

})
export class ToDoListComponent {
  @Input() todos!: Observable<Todo[]>;
  @Output() todoSelected = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  deleteTodo(id: number) {
      this.todoSelected.emit(id);
  }
  trackById(index: number, item: Todo): number {
    return item.id;
  }

}
