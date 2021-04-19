import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {User} from '../../models/user';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})

export class RegisterFormComponent implements OnInit {

  @Output() onRegistration: EventEmitter<User> = new EventEmitter<User>();

  public title: string = null;

  // Gestione form
  public registrationValidator: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.title = 'Registration';
    this.createForm();
  }

  public registration() {
  if (this.registrationValidator.valid) {
    const name = this.registrationValidator.get('name').value;
    const surname = this.registrationValidator.get('surname').value;
    const email = this.registrationValidator.get('email').value;
    const password = this.registrationValidator.get('password').value;

    const user = {} as User;
    user.name = name;
    user.surname = surname;
    user.email = email;
    user.password = password;

    // Emetto il valore
    this.onRegistration.emit(user);

    // Pulisco valori
    this.registrationValidator.get('name').setValue('');
    this.registrationValidator.get('surname').setValue('');
    this.registrationValidator.get('email').setValue('');
    this.registrationValidator.get('password').setValue('');
    } else {
      window.alert('Validation error');
    }
  }

  private createForm() {
    this.registrationValidator = new FormGroup(
      {
        name: new FormControl('', [Validators.required, Validators.minLength(3)]),
        surname: new FormControl('', [Validators.required, Validators.minLength(3)]),
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required, Validators.minLength(8)])}
    );
  }

}
