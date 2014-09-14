'use strict';

angular.module('app')
    .directive('svArticle', function () {
        return {
            restrict: 'E',
            replace:true,
            templateUrl: '../views/directives/sv-article.html',
            controller: function ($scope) {
            }
        };
    });
