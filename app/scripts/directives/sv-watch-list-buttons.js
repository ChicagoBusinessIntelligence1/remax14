'use strict';

angular.module('app')
  .directive('svWatchListButtons', function (WatchListService, $rootScope) {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-watch-list-buttons.html',
      scope: {
        mls: '@'
      },
      link: function ($scope, element, attr) {
        $rootScope.$watch('user.watchList', function (list) {
          if (_.isUndefined(list)) {
            return;
          }
          $scope.isWatched = $rootScope.user.watchList.indexOf($scope.mls) > -1;
        });
        $scope.addToWatchList = function (mls) {
          WatchListService.addHome(mls).then(function () {
            $scope.isWatched = true;
          });
        };
        $scope.removeFromWatchList = function (mls) {
          WatchListService.removeHome(mls).then(function () {
            $scope.isWatched = false;
          });
        };
      }
    };
  });
