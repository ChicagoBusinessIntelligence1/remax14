'use strict';

angular.module('app')
  .directive('svTabs', function () {
    return {
      restrict: 'E',
      templateUrl: '../../views/directives/sv-tabs.html',
      link: function ($scope, element, attr) {
        $scope.tabActive = 0;

        $scope.setActiveTab = function (key) {
          $scope.tabActive = key;
        };

      }
    };
  });
