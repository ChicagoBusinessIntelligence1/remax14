'use strict';

angular.module('app')
  .directive('svHomesUserList', function (HomeWatchListService, urlRental, urlSale, DraftsService, $rootScope, WatchListService, BrokerHomesService) {
    return {
      restrict: 'E',
      templateUrl: '../../views/directives/sv-homes-user-list.html',
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
          case 'watchList':
            $rootScope.$watch('user.watchList', function (list) {
              if (_.isUndefined(list)) {
                return;
              }
              if (!$scope.isRent) {
                HomeWatchListService.getSales().then(function (watchListHomes) {
                  $scope.homes = watchListHomes;
                });
              } else {
                HomeWatchListService.getRent().then(function (watchListHomes) {
                  $scope.homes = watchListHomes;
                });
              }
            });
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
