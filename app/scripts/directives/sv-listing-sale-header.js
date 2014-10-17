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
        saveTemplate: '&',
        draft: '=',
        removeDraft:'&'
      },
      require: '^sv-listing-sale',
      link: function ($scope, element, attr, svCtrl) {


      }
    };
  });
