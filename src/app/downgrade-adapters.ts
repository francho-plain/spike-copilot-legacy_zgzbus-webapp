/**
 * Downgrade adapters for Angular services to be used in AngularJS
 * This allows AngularJS components to inject Angular services during the hybrid migration
 */
import { downgradeInjectable } from '@angular/upgrade/static';
import { BusStopsService } from './services/bus-stops.service';
import { BusTimesService } from './services/bus-times.service';

// Angular module reference will be available after bootstrap
declare const angular: any;

/**
 * Register Angular services as AngularJS factories
 * Must be called after angular.module('zgzbus') is defined
 */
export function registerDowngradedServices() {
  angular.module('zgzbus')
    .factory('BusStopsService', downgradeInjectable(BusStopsService))
    .factory('BusTimesService', downgradeInjectable(BusTimesService));
}
