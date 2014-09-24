'use strict';

angular.module('app')
  .directive('svSearchProperty', function () {
    return {
      templateUrl: '../views/directives/sv-search-property.html',
      restrict: 'E'
    };
  });
