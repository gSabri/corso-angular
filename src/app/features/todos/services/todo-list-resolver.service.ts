import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {TodoService} from './todo.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoListResolver implements Resolve<any>{

  constructor(private todoService: TodoService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    return this.todoService.getAllTodo();
  }

}
