'use strict';

angular.module('app')
  .directive('svHomeDraftSm', function () {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-home-draft-sm.html',
      scope: {
        draft: '=',
        removeDraft: '&',
        postDraft: '&'
      },
      require: '^sv-drafts-list',
      link: function ($scope, element, attr, svListCtrl) {
        $scope.homeStatus = svListCtrl.homeStatus;
      }
    };
  });
