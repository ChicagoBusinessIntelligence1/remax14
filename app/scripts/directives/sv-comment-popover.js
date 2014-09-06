'use strict';

angular.module('app')
    .directive('svCommentPopover', function () {
        return {
            restrict: 'E',
            scope: {},
            templateUrl: 'views/directives/sv-comment-popover.html',
            link: function postLink($scope, element, attrs) {

            }
        };
    });
