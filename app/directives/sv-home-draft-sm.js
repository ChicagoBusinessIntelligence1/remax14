'use strict';

angular.module('app')
  .directive('svHomeDraftSm', function () {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-home-draft-sm.html',
      scope: {
        draft: '=',
        removeDraft:'&',
        postDraft:'&'
      },
      link: function ($scope, element, attr) {

      }
    };
  });
