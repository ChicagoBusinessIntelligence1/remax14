'use strict';

angular.module('app')
  .directive('svHomeSm', function () {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-home-sm.html',
      scope: {
        draft: '=',
        removeDraft: '&',
        postDraft: '&'
      },
      require: '^sv-drafts-list',
      link: function ($scope, element, attr, svListCtrl) {
        $scope.homeStatus = svListCtrl.homeStatus;
        $scope.isRent = svListCtrl.isRent;
      }
    };
  });
