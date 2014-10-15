'use strict';

angular.module('app')
  .directive('svListingSaleHeader', function () {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-listing-sale-header.html',
      scope: {
        house: '=',
        isTemplate: '=',
        saveTemplate: '&'
      },
      link: function ($scope, element, attr) {
      }
    };
  });
