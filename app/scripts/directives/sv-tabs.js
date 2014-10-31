'use strict';

angular.module('app')
  .directive('svTabs', function () {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-tabs.html',
      scope: {
        drafts: '=',
        homes: '=',
        tabs: '='
      },
      link: function ($scope, element, attr) {
        $scope.tabActive = 0;

        $scope.setActiveTab = function (key) {
          $scope.tabActive = key;
        };

        $scope.tests=['1','2','3','4','5'];
      }
    };
  });
