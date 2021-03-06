import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TodoListComponent} from './components/todo-list/todo-list.component';
import {TodoFormComponent} from './components/todo-form/todo-form.component';
import {TodoComponent} from './containers/todo/todo.component';
import {TodosRoutingModule} from './todos-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TodoListResolver} from './services/todo-list-resolver.service';

@NgModule({
  declarations: [
    TodoListComponent,
    TodoFormComponent,
    TodoComponent
  ],
  imports: [
    CommonModule,
    TodosRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    TodoListResolver
  ]
})

export class TodosModule { }
