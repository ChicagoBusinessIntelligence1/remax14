'use strict';

angular.module('app')
  .directive('svDraftsList', function (urlRental, urlSale, DraftsService, $rootScope, BrokerHomesService) {
    return {
      restrict: 'E',
      templateUrl: '../../views/directives/sv-drafts-list.html',
      scope: {
        isRent: '=',
        isDraft: '='
      },
      link: function ($scope, element, attr) {
        var url = $scope.isRent ? urlRental : urlSale;
        if ($scope.isDraft) {
          $scope.homes = DraftsService.all(url, $rootScope.user.id);
        } else {
          BrokerHomesService.findBrokerHomes(url, $rootScope.user.id).then(function (myHomes) {
            $scope.homes = myHomes;
          })
        }
        $scope.removeDraft = function (mls) {
          DraftsService.remove(mls)
        };
        $scope.postDraft = function (mls) {
          DraftsService.moveToHomes(mls);
        };
      }
    };
  });
