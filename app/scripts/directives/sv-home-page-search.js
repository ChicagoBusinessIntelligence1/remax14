'use strict';

angular.module('app')
  .directive('svHomePageSearch', function () {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-home-page-search.html',
      scope: {

      },
      link: function ($scope, element, attr) {

      }
    };
  });
