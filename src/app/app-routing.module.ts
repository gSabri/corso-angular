import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from './app.component';
import {AuthGuard} from './features/todos/services/auth-guard.service';
import {TodoListResolver} from './features/todos/services/todo-list-resolver.service';

// Lazy loading componente todos solo quando richiesto, tramite un suo modulo con routing. Poi mantenuto in memoria
// Forzo il login in una single page application
// Data permette gia' di passare dati in fase di cambio di rotta
const routes: Routes = [
    { path: '',
      redirectTo: 'AppComponent',
      pathMatch: 'full',
      data: {
        title: 'Home Page'
      }
    },
    { path: 'todo',
      loadChildren: () => import('./features/todos/todos.module').then(m => m.TodosModule),
      pathMatch: 'full',
      data: {
        title: 'ToDo List'
      },
      canActivate: [AuthGuard]
    },
    { path: 'login',
      loadChildren: () => import('./features/login/login.module').then(m => m.LoginModule),
      data: {
        title: 'Login'
      }
    }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
