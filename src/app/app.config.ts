import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),  // Vérifiez si cette ligne est nécessaire dans votre version
    provideRouter(routes)  // Correct, aucun changement nécessaire
  ]
};
