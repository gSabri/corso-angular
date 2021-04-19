import {RouterModule, Routes} from '@angular/router';
import { LoginComponent } from './containers/login/login.component';
import {NgModule} from '@angular/core';
import {RegisterComponent} from './containers/register/register.component';

const routes: Routes = [
  { path: '',
    component: LoginComponent,
    pathMatch: 'full',
    data: {
      title: 'Login'
    }
  },
  { path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register'
    }
  }
];

// le porzioni di root devono essere caricate come figlie della principale (app-routing)
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
