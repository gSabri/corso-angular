import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:3000';

  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) { }

  // mock ritorna lista, altrimenti sarebbe user singolo
  login(user: User): Observable<User[]>{
    return this.http.get<User[]>(this.apiUrl + '/users?email=' + user.email + '&password=' + user.password);
  }

  // Recupero la lista dei users
  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl + '/users');
  }

  // Recupero singolo user
  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/users/${id}`);
  }

  // Popolamento nuovo user con ritorno nuovo oggetto
  createUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/users/`, JSON.stringify(user), this.httpOptions);
  }
}
