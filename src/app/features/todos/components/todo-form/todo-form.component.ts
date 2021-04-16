import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {

  @Output() onNewElement: EventEmitter<string> = new EventEmitter<string>();

  //public element: string = '';
  public title: string = null;

  // Gestione form
  public mioFormValidator: FormGroup;

  constructor() {
    this.createForm();
  }

  ngOnInit(): void {
    this.title = 'ToDo List';
  }

  /** Funzione addTodo
    prende la stringa inserita dall'utente salvata in element e la emette al componente
   */
  public addTodo(){
    const val = this.mioFormValidator.get('element').value;

    // Mettiamo in console il valore di element
    console.log('Valore element: ' + val);

    // Emetto il valore
    this.onNewElement.emit(val);

    // Pulisco valore
    this.mioFormValidator.get('element').setValue('');
  }

  /*public addTodo(){
    // Mettiamo in console il valore di element
    console.log('Valore element: ' + this.element);

    // Emetto il valore
    this.onNewElement.emit(this.element);

    // Pulisco valore
    this.element = '';
  }*/

  private createForm() {
    this.mioFormValidator = new FormGroup(
       {element: new FormControl('', [Validators.required, Validators.minLength(3)])}
       );
  }

}
