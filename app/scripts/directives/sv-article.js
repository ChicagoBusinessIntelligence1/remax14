'use strict';

angular.module('app')
    .directive('svArticle', function () {
        return {
            restrict: 'E',
            templateUrl: '../views/directives/sv-article.html',
            scope: {
                post: '='
            },
            controller: function ($scope) {

            }
        };
    });
