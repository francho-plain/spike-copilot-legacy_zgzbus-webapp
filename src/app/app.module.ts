import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { UpgradeModule } from '@angular/upgrade/static';
import { RouterModule } from '@angular/router';
import { BusStopsService } from './services/bus-stops.service';
import { BusTimesService } from './services/bus-times.service';
import { AppComponent } from './app.component';
import { routes } from './app.routes';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    UpgradeModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  providers: [
    BusStopsService,
    BusTimesService
  ]
})
export class AppModule {
  constructor(private upgrade: UpgradeModule) {}

  ngDoBootstrap() {
    this.upgrade.bootstrap(document.body, ['zgzbus'], { strictDi: true });
  }
}
