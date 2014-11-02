'use strict';

angular.module('app')
  .directive('svDraftsList', function () {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-drafts-list.html',
      scope: {

      },
      link: function ($scope, element, attr) {

      }
    };
  });
