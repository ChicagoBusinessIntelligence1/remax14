'use strict';

angular.module('app')
  .directive('svTabs', function ($timeout) {
    return {
      restrict: 'E',
      templateUrl: '../../views/directives/sv-tabs.html',
      link: function ($scope, element, attr) {
        $scope.tabActive = 0;
        $scope.setActiveTab = function (key) {
          $timeout(function () {
          $scope.tabActive = key;
          },0);
        };
      }
    };
  });
