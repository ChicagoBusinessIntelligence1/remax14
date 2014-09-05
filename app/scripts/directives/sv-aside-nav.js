'use strict';

angular.module('app')
    .directive('svAsideNav', function () {
        return {
            templateUrl: '../views/directives/sv-aside-nav.html',
            restrict: 'E',
            controller: function($scope){
                $scope.sub1Shown=false;

                $scope.showSub1 = function () {

                $scope.sub1Shown= !$scope.sub1Shown;
                };
            }
        };
    });
