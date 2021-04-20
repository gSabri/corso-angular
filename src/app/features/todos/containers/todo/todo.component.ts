import {Component, OnDestroy, OnInit} from '@angular/core';
import { Todo } from '../../models/todo';
import {Subject} from 'rxjs';
import {TodoService} from '../../services/todo.service';
import {catchError, takeUntil} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit, OnDestroy {

  public todoList: Todo[] = [];

  // Vabiabile per distruggere observer e socket in ascolto
  // Subject e' observable come EventEmitter castabile a diversi observer
  private destroy: Subject<boolean> = new Subject<boolean>();

  // Recupero dati della rotta attiva
  constructor(private todoService: TodoService,
              private actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.todoList = [];

    /** Recupero la lista da API */
    // Non serve rimappare il dato ma devo chiudere pipe quando muore componente
    // Gestisco anche gli errori
    /*this.todoService.getAllTodo()
      .pipe(
        takeUntil(this.destroy),
        catchError(err => {
          window.alert('Errore http ' + err.message);
          throw new Error('Errore http ' + err.message);
        })
      )
      .subscribe(result => {
        this.todoList = result;
      });*/

    /** Recupero dati da rotta attiva */
    this.actRoute.data.subscribe( data => {
      this.todoList = data.todoListResolver;
    });
  }

  ngOnDestroy(): void {
    this.destroy.next(true);
    this.destroy.unsubscribe(); // disassocio parte gestione observable
  }

  public addNewElement(element: string) {
    const todo = {} as Todo;
    todo.text = element;
    todo.done = false;
    todo.id = this.todoList.length + 1;

    // this.todoList.push(todo);

    // Persisto e aggiungo a lista
    this.todoService.createTodo(todo)
      .pipe(
        takeUntil(this.destroy),
        catchError(err => {
          window.alert('Errore http ' + err.message);
          throw new Error('Errore http ' + err.message);
        })
      )
      .subscribe(result => {
        this.todoList.push(result);
      });
  }

  public elementToggle(todo: Todo) {

    // Persisto e aggiorno a lista
    this.todoService.updateTodo(todo)
      .pipe(
        takeUntil(this.destroy),
        catchError(err => {
          window.alert('Errore http ' + err.message);
          throw new Error('Errore http ' + err.message);
        })
      )
      .subscribe(result => {
        if (result !== null && result !== undefined) {
          const foundIndex = this.todoList.findIndex(x => x.id === result.id);
          if (foundIndex !== -1) {
            this.todoList[foundIndex] = result;
          }
        }
      });
  }

}
