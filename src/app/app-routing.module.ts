import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from './app.component';

// Lazy loading componente todos solo quando richiesto, tramite un suo modulo con routing. Poi mantenuto in memoria
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
      }
    }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
