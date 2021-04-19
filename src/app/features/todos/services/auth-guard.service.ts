import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Todo} from '../models/todo';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import {TodoService} from "./todo.service";
import {map} from "rxjs/operators";

@Injectable()

export class AuthGuard implements CanActivate {

  constructor(private todoService: TodoService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // rimappo token in un boolean con observable
    return this.todoService.login()
      .pipe(map((token: string) => {
          if (token === null || token === undefined) {
            return false;
          }
          return true;
        })
      );
  }

}
