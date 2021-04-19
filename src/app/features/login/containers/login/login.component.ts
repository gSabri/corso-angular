import {Component, OnDestroy, OnInit} from '@angular/core';
import {User} from '../../models/user';
import {UserService} from '../../services/user.service';
import {Subject} from 'rxjs';
import {catchError, takeUntil} from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit, OnDestroy {

  private destroy: Subject<boolean> = new Subject<boolean>();

  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.destroy.next(true);
    this.destroy.unsubscribe(); // disassocio parte gestione observable
  }

  public login(user: User) {
   this.userService.login(user)
      .pipe(
        takeUntil(this.destroy),
        catchError(err => {
          window.alert('Errore http ' + err.message);
          throw new Error('Errore http ' + err.message);
        })
      )
      .subscribe(result => {
        if (result === null || result === undefined || result.length === 0) {
          window.alert('Utente inesistente');
        } else {
          window.alert('Esiste' + JSON.stringify(result[0]));
          this.router.navigate(['todo']);
        }
      });
  }

}
