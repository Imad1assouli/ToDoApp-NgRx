import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { TodoEffects } from './store/todo.effects';
import { TodoReducer } from './store/todo.reducers';
import { ToDoHomeComponent } from './to-do-home/to-do-home.component';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToDoService } from './services/todo.service';

@NgModule({
  declarations: [
    ToDoHomeComponent,
    ToDoListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('todo', TodoReducer),
    EffectsModule.forFeature([TodoEffects]) // Gérer les effets spécifiques au module
  ],
  providers: [
    ToDoService,  // Pas besoin de TodoEffects ici car déjà ajouté avec EffectsModule.forFeature
  ]
})
export class ToDoModule { }
