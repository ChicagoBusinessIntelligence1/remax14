'use strict';

angular.module('app')
  .directive('svHomeSaleHeader', function () {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-home-sale-header.html',
      scope: {
        isTemplate: '=',
        saveTemplate: '&',
        draft: '=',
        deleteDraft:'&'
      },
      link: function ($scope, element, attr, svDisplayCtrl) {

      }
    };
  });
