import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { BusStopsService } from './app/services/bus-stops.service';
import { BusTimesService } from './app/services/bus-times.service';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    BusStopsService,
    BusTimesService
  ]
}).catch(err => console.error(err));
