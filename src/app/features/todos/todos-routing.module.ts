import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './containers/todo/todo.component';

const routes: Routes = [
    { path: '',
      component: TodoComponent,
      pathMatch: 'full',
      data: {
        title: 'ToDo List'
      }
    }
  ];

// le porzioni di root devono essere caricate come figlie della principale (app-routing)
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodosRoutingModule { }
