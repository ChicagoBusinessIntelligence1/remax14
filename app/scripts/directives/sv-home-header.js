'use strict';

angular.module('app')
  .directive('svHomeHeader', function () {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-home-header.html',
      scope: {
        home: '=',
        isRent: '=',
        isTemplate: '=',
        saveTemplate: '&',
        isDraft: '=',
        delDraft: '&'
      },
      link: function ($scope, element, attr, svDisplayCtrl) {
      }
    };
  });
