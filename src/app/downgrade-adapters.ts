/**
 * Downgrade adapters for Angular services and components to be used in AngularJS
 * This allows AngularJS to inject and use Angular services/components during hybrid migration
 */
import { downgradeInjectable, downgradeComponent } from '@angular/upgrade/static';
import { BusStopsService } from './services/bus-stops.service';
import { BusTimesService } from './services/bus-times.service';
import { MainComponent } from './components/main/main.component';
import { MapComponent } from './components/map/map.component';

// Angular module reference will be available after bootstrap
declare const angular: any;

/**
 * Register Angular services and components as AngularJS factories/directives
 * Must be called after angular.module('zgzbus') is defined
 */
export function registerDowngradedServices() {
  angular.module('zgzbus')
    .factory('BusStopsService', downgradeInjectable(BusStopsService))
    .factory('BusTimesService', downgradeInjectable(BusTimesService))
    .directive('appMain', downgradeComponent({ component: MainComponent }))
    .directive('appMap', downgradeComponent({ component: MapComponent }));
}
