import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Todo} from "../models/todo";

@Injectable({
  providedIn: 'root'
})

export class TodoService {

  private apiUrl = 'http://localhost:3000';

  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) { }

  // Ritorno flusso asincrono della chiamata
  // Recupero token da login
  login(): Observable<any> {
    return this.http.get<string>(this.apiUrl + '/login');
  }

  // Recupero la lista dei todos
  getAllTodo(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.apiUrl + '/todo');
  }

  // Recupero singolo todos
  getTodo(id: number): Observable<Todo> {
    return this.http.get<Todo>(`${this.apiUrl}/todo/${id}`);
    // return this.http.get<Todo>(this.apiUrl + '/todo/' + id);
  }

  // Popolamento nuovo todos con ritorno nuovo oggetto
  createTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(`${this.apiUrl}/todo/`, JSON.stringify(todo), this.httpOptions);
  }
}
