'use strict';

angular.module('app')
    .directive('svAsideNav', function () {
        return {
            templateUrl: '../views/directives/sv-aside-nav.html',
            restrict: 'E'
        };
    });
