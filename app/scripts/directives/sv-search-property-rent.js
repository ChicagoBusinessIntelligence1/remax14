'use strict';

angular.module('app')
  .directive('svSearchPropertyRent', function () {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-search-property-rent.html',
      scope: {

      },
      link: function ($scope, element, attr) {

      }
    };
  });
