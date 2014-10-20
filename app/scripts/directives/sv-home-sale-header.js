'use strict';

angular.module('app')
  .directive('svHomeSaleHeader', function () {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-home-sale-header.html',
      scope: {
        homeFormIn: '=',
        isTemplate: '=',
        saveTemplate: '&',
        draft: '=',
        deleteDraft:'&'
      },
      require: '^sv-home-sale',
      link: function ($scope, element, attr, svCtrl) {


      }
    };
  });
