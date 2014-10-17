'use strict';

angular.module('app')
  .directive('svListingBasicInfo', function () {
    return {
      restrict: 'E',
      templateUrl: '../../views/directives/sv-listing-basic-info.html',
      scope: {
        listing: '='
      },
      link: function ($scope, element, attr) {
      }
    };
  });
