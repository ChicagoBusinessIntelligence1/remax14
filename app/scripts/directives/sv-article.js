'use strict';

angular.module('app')
    .directive('svArticle', function () {
        return {
            restrict: 'E',
            templateUrl: '../views/directives/sv-article.html',
            controller: function ($scope) {
                $scope.delPopover = {
                    'scope': '$scope',
                    'placement': 'top'
        };
            }
        };
    });
