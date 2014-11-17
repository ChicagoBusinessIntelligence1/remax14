'use strict';

angular.module('app')
  .directive('svNewListings', function () {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-new-listings.html',
      scope: {

      },
      link: function ($scope, element, attr) {

      }
    };
  });
