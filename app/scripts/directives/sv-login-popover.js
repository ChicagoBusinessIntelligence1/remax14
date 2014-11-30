'use strict';

angular.module('app')
    .directive('svLoginPopover', function ($popover) {
        return {
            restrict: 'EA',
            link: function (scope, element, attrs) {
                var myPopover = $popover(element, {
                    scope: scope,
                    title: 'Login',
                    template: '../../views/popover/login-fb.html',
                    placement: 'bottom',
                    autoClose:1
                });
            }
        };
    });
