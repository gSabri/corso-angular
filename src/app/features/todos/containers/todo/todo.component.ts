import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  public todoList: Todo[] = [];

  constructor() {
  }

  ngOnInit(): void {

  }


  public addNewElement(element: string) {
    const todo = {} as Todo;
    todo.text = element;
    todo.done = false;
    todo.id = this.todoList.length + 1;

    this.todoList.push(todo);
  }

}
