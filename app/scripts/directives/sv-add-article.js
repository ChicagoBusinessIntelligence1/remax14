'use strict';

angular.module('app')
    .directive('svAddArticle', function () {
        return {
            templateUrl: '../views/directives/sv-add-article.html',
            restrict: 'E'
        };
    });
