'use strict';

angular.module('zgzbus')
    .component('mainComponent', {
        templateUrl: 'views/main.html',
        controller: MainComponentController
    });

function MainComponentController($timeout, BusTimesGetter) {
    var $ctrl = this;

    $ctrl.busInfo = {
        busStop: 0,
        title: '',
        frequencies: [],
        error: null
    };

    $ctrl.inProgress = false;

    $ctrl.getBusTimeTable = function () {
        setProgressOn();

        BusTimesGetter.callWebService($ctrl.busInfo.busStop)
            .then(function (data) {
                angular.copy(data, $ctrl.busInfo);
                setProgressOff();
            });
    };

    $ctrl.getDistanceClass = function(timeToArrive) {
        var parts = timeToArrive.split(' ');

        var minutes = parts[0];

        if(minutes < 2 || minutes === 'En la parada') {
            return "distance1";
        } else if(minutes < 5) {
            return "distance2";
        } else {
            return "distance3";
        }
    };

    function setProgressOn() {
        $ctrl.inProgress = true;
    }

    function setProgressOff() {
        $ctrl.inProgress = false;
    }
}
