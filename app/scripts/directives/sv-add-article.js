'use strict';

angular.module('fengshui')
    .directive('svAddArticle', function () {
        return {
            templateUrl: '../views/directives/sv-add-article.html',
            restrict: 'E'
        };
    });
