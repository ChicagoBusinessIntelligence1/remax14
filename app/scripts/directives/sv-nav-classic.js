'use strict';

angular.module('app')
    .directive('svNavClassic', function () {
        return {
            templateUrl: '../views/directives/sv-nav-classic.html',
            restrict: 'E'
        };
    });
