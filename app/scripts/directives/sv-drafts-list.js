'use strict';

angular.module('app')
  .directive('svDraftsList', function (urlRental, urlSale, DraftsService, $rootScope, BrokerHomesService) {
    return {
      restrict: 'E',
      templateUrl: '../../views/directives/sv-drafts-list.html',
      scope: {
        isRent: '=',
        homeStatus: '='
      },
      controller: function ($scope) {
        this.homeStatus = $scope.homeStatus;
        this.isRent = $scope.isRent;
      },
      link: function ($scope, element, attr) {
        var url = $scope.isRent ? urlRental : urlSale;
        switch ($scope.homeStatus) {
          case 'draft':
            $scope.homes = DraftsService.all(url, $rootScope.user.id);
            break;
          case 'active':
            BrokerHomesService.findBrokerHomes(url, $rootScope.user.id).then(function (myHomes) {
              $scope.homes = myHomes;
            })
            break;

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
