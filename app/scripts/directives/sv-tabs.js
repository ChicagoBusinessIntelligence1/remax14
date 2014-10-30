'use strict';

angular.module('app')
  .directive('svTabs', function () {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-tabs.html',
      scope: {
        homes: '=',
        tabs2: '='
      },
      link: function ($scope, element, attr) {
        $scope.tabActive = 'Sale';

        $scope.setActiveTab = function (key) {
          $scope.tabActive = key;
        };
      }
    };
  });
