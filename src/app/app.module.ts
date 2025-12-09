import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BusStopsService } from './services/bus-stops.service';
import { BusTimesService } from './services/bus-times.service';
import { AppComponent } from './app.component';
import { routes } from './app.routes';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes, { useHash: true }),
    AppComponent
  ],
  providers: [
    BusStopsService,
    BusTimesService
  ]
})
export class AppModule {}
