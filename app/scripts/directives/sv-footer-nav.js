'use strict';

angular.module('app')
    .directive('svFooterNav', function () {
        return {
            templateUrl: '../views/directives/sv-footer-nav.html',
            restrict: 'E'
        };
    });
