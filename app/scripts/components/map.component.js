'use strict';

angular.module('zgzbus')
    .component('mapComponent', {
        templateUrl: 'views/map.html',
        controller: MapComponentController
    });

function MapComponentController(BusStopsService) {
    var $ctrl = this;

    $ctrl.mapPoints = {};
    $ctrl.inProgress = false;

    $ctrl.getMapPoints = function () {
        setProgressOn();

        BusStopsService.getBusStops()
            .then(function (data) {
                angular.copy(data, $ctrl.mapPoints);
                setProgressOff();
            });
    };

    function setProgressOn() {
        $ctrl.inProgress = true;
    }

    function setProgressOff() {
        $ctrl.inProgress = false;
    }

    // Initialize
    $ctrl.getMapPoints();
}
