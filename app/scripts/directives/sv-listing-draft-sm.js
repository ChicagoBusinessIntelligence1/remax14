'use strict';

angular.module('app')
  .directive('svListingDraftSm', function () {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-listing-draft-sm.html',
      scope: {
        draft: '=',
        removeDraft:'&',
        postDraft:'&'
      },
      link: function ($scope, element, attr) {

      }
    };
  });
