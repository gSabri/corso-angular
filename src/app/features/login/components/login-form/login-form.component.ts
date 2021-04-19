import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {User} from '../../models/user';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  @Output() onLogin: EventEmitter<User> = new EventEmitter<User>();

  public title: string = null;

  // Gestione form
  public loginValidator: FormGroup;

  constructor(private router: Router) {
    this.title = 'Login';
    this.createForm();
  }

  ngOnInit(): void {
  }

  public toRegistration(){
    this.router.navigate(['login/register']);
  }

 public login(){
    if (this.loginValidator.valid) {
      const email = this.loginValidator.get('email').value;
      const password = this.loginValidator.get('password').value;

      const user = {} as User;
      user.email = email;
      user.password = password;

      // Emetto il valore
      this.onLogin.emit(user);

      // Pulisco valore
      this.loginValidator.get('email').setValue('');
      this.loginValidator.get('password').setValue('');
    } else {
      window.alert('Validation error');
    }
  }

  private createForm() {
    this.loginValidator = new FormGroup(
      {email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required, Validators.minLength(8)])}
    );
  }

}
