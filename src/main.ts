import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic()
  .bootstrapModule(AppModule, {
    ngZoneEventCoalescing: true  // Cela améliore les performances
  })
  .catch(err => console.error(err));  // Bonne gestion des erreurs
