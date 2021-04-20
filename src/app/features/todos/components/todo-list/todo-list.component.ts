import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Todo } from '../../models/todo';

// Angular
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})

// Typescript
export class TodoListComponent implements OnInit {

  @Output() onElementToggle: EventEmitter<Todo> = new EventEmitter<Todo>();

  @Input() todos: Todo[] = [];

  public title: string = null;

  constructor() {
    this.title = 'Titolo 1';
  }

  ngOnInit(): void {
  }

  /** onToggle
   * Funzione per cambiare lo stato della riga
   */
  public onToggle(todo: Todo) {
    todo.done = !todo.done;

    // Emetto il valore
    this.onElementToggle.emit(todo);
  }

}
