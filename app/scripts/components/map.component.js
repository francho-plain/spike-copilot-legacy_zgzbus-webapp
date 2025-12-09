'use strict';

angular.module('zgzbus')
    .component('mapComponent', {
        templateUrl: 'views/map.html',
        controller: MapComponentController
    });

function MapComponentController(BusStopsGetter) {
    var $ctrl = this;

    $ctrl.mapPoints = {};
    $ctrl.inProgress = false;

    $ctrl.getMapPoints = function () {
        setProgressOn();

        BusStopsGetter.callWebService()
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
