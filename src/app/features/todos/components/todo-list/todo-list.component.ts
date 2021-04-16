import {Component, Input, OnInit} from '@angular/core';
import { Todo } from '../../models/todo';

// Angular
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})

// Typescript
export class TodoListComponent implements OnInit {

  // ----- Dichiarative pubbliche
  @Input() todos: Todo[] = [];

  public title: string = null;

  // ----- Dichiarative protected


  constructor() {
    this.title = 'Titolo 1';
  }

  // ----- Metodi pubblici
  ngOnInit(): void {
  }

  /** onToggle
   * Funzione per cambiare lo stato della riga
   */
  public onToggle(todo: Todo) {
    todo.done = !todo.done;
  }

  // ----- Metodi protected

}
