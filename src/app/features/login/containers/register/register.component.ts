import {Component, OnDestroy, OnInit} from '@angular/core';
import {User} from '../../models/user';
import {catchError, takeUntil} from 'rxjs/operators';
import {Router} from '@angular/router';
import {UserService} from '../../services/user.service';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit, OnDestroy {

  private destroy: Subject<boolean> = new Subject<boolean>();

  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.destroy.next(true);
    this.destroy.unsubscribe(); // disassocio parte gestione observable
  }

  public registration(user: User) {

    this.userService.getAllUsers() .pipe(
      takeUntil(this.destroy),
      catchError(err => {
        window.alert('Errore http ' + err.message);
        throw new Error('Errore http ' + err.message);
      })
    )
    .subscribe(result => {
      user.id = result.length + 1;
    });

    this.userService.createUser(user)
      .pipe(
        takeUntil(this.destroy),
        catchError(err => {
          window.alert('Errore http ' + err.message);
          throw new Error('Errore http ' + err.message);
        })
      )
      .subscribe(result => {
        if (result === null || result === undefined) {
          window.alert('Error in the registration');
        } else {
          this.router.navigate(['login']);
        }
      });
  }

}
