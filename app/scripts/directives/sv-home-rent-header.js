'use strict';

angular.module('app')
  .directive('svHomeRentHeader', function () {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-home-rent-header.html',
      scope: {
        rent: '=',
        isTemplate: '=',
        saveTemplate: '&',
        isDraft: '=',
        delDraft: '&'
      },
      link: function ($scope, element, attr) {

      }
    };
  });
