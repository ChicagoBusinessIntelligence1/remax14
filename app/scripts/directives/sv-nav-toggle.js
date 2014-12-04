'use strict';

angular.module('app')
    .directive('svNavToggle', function () {
        return {
            templateUrl: '../views/directives/sv-nav-toggle.html',
            restrict: 'E'
        };
    });
