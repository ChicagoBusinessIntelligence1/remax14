'use strict';

angular.module('app')
  .directive('svListingSaleDraft', function () {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-listing-sale-draft.html',
      scope: {

      },
      link: function ($scope, element, attr) {

      }
    };
  });
