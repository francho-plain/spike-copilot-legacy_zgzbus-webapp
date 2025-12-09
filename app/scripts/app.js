'use strict';

angular.module('zgzbus', ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                template: '<app-main></app-main>'
            })
            .when('/map', {
                template: '<app-map></app-map>'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
