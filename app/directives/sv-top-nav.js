'use strict';

angular.module('app')
    .directive('svTopNav', function () {
        return {
            templateUrl: '../views/directives/sv-top-nav.html',
            restrict: 'E'
        };
    });
