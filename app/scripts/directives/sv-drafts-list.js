'use strict';

angular.module('app')
  .directive('svDraftsList', function (urlRental, urlSale, DraftsService, $rootScope) {
    return {
      restrict: 'E',
      templateUrl: '../../views/directives/sv-drafts-list.html',
      scope: {
        isRent: '='
      },
      link: function ($scope, element, attr) {
        var url = $scope.isRent ? urlRental : urlSale;

        $scope.drafts = DraftsService.all(url, $rootScope.user.id);

        $scope.removeDraft = function (mls) {
          DraftsService.remove(mls)
        };
        $scope.postDraft = function (mls) {
          DraftsService.moveToHomes(mls);
        };

      }
    };
  });
