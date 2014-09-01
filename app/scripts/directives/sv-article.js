'use strict';

angular.module('app')
    .directive('svArticle', function () {
        return {
            templateUrl: '../views/directives/sv-article.html',
            restrict: 'E'
        };
    });
