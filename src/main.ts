import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { registerDowngradedServices } from './app/downgrade-adapters';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then(() => {
    // Register Angular services for use in AngularJS after Angular bootstraps
    registerDowngradedServices();
  })
  .catch(err => console.error(err));
