'use strict';

angular.module('app')
  .directive('svHomePageSearch', function (estateTypes) {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-home-page-search.html',
      scope: {
        chooseType: '='
      },
      link: function ($scope, element, attr) {

        $scope.estateTypes = estateTypes;
      }
    };
  });
