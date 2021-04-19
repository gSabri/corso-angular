import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LoginComponent} from './containers/login/login.component';
import {LoginFormComponent} from './components/login-form/login-form.component';
import {LoginRoutingModule} from './login-routing.module';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { RegisterComponent } from './containers/register/register.component';

@NgModule({
  declarations: [
    LoginComponent,
    LoginFormComponent,
    RegisterFormComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LoginModule { }
