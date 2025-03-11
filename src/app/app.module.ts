import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDoModule } from './ToDo/to-do.module';  // Assurez-vous que ce chemin est correct
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { environment } from './environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ToDoModule, // Import du module spécifique
    StoreModule.forRoot({}), // Pas besoin d'état global ici
    EffectsModule.forRoot([]),  // Ajoutez ceci pour les effets globaux
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
      connectInZone: true
    }),
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi())  // Pour gérer les interceptors si vous en avez
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
