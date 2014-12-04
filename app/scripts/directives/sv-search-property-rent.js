'use strict';

angular.module('app')
  .directive('svSearchPropertyRent', function ($state, $rootScope) {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-search-property-rent.html',

      link: function ($scope, element, attr) {
      }
    };
  });
