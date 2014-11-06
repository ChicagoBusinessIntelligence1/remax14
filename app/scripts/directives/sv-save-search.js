'use strict';

angular.module('app')
  .directive('svSaveSearch', function () {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-save-search.html',
      scope: {

      },
      link: function ($scope, element, attr) {

      }
    };
  });
