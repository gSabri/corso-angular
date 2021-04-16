import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './features/todos/components/todo-list/todo-list.component';
import { TodoFormComponent } from './features/todos/components/todo-form/todo-form.component';
import { TodoComponent } from './features/todos/containers/todo/todo.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    /*TodoListComponent,
    TodoFormComponent,
    TodoComponent*/
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    /*FormsModule,
    ReactiveFormsModule,*/
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
