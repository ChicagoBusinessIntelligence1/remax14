'use strict';

angular.module('app')
  .directive('svDelDraft', function () {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-del-draft.html',
      scope: {

      },
      link: function ($scope, element, attr) {

      }
    };
  });
