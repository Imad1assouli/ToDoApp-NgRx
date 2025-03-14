import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToDoHomeComponent } from './ToDo/to-do-home/to-do-home.component';


const routes: Routes = [
  {
    path: '',
    component: ToDoHomeComponent,
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
