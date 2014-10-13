'use strict';

angular.module('app')
  .directive('svListingInlineInfo', function () {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-listing-inline-info.html',
      scope: {
        house: '='
      },
      link: function ($scope, element, attr) {
      }
    };
  });
