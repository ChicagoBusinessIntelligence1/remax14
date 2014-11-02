'use strict';

angular.module('app')
  .directive('svHomeRentalHeader', function () {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-home-rental-header.html',
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
