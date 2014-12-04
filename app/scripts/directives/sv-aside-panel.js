'use strict';

angular.module('app')
    .directive('svAsidePanel', function () {
        return {
            templateUrl: '../views/directives/sv-aside-panel.html',
            restrict: 'E'
        };
    });
