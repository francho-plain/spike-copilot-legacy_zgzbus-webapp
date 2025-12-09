'use strict';

angular.module('zgzbus', ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                template: '<main-component></main-component>'
            })
            .when('/map', {
                template: '<map-component></map-component>'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
