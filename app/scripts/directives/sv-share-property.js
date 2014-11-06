'use strict';

angular.module('app')
  .directive('svShareProperty', function () {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-share-property.html',
      scope: {

      },
      link: function ($scope, element, attr) {

      }
    };
  });
