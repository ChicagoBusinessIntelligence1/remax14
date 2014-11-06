'use strict';

angular.module('app')
  .directive('svWatchListButtons', function (notifications, WatchListService, $rootScope) {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-watch-list-buttons.html',
      scope: {
        mls: '@'
      },

      require: '^sv-homes-list',
      link: function ($scope, element, attr, svListCtrl) {
        $scope.addToWatch = notifications.addToWatch;
        $scope.removeFromWatch = notifications.removeFromWatch;

        $scope.isRent = svListCtrl.isRent;

        var saleRent = $scope.isRent ? 'rent' : 'sale';
        $rootScope.$watch('user.watchList', function (list) {
          if (_.isUndefined(list)) {
            return;
          }
          $scope.isWatched = $rootScope.user.watchList[saleRent].indexOf($scope.mls) > -1;
        });
        $scope.addToWatchList = function (mls) {
          WatchListService.addHome($scope.isRent, mls).then(function () {
            $scope.isWatched = true;
          });
        };
        $scope.removeFromWatchList = function (mls) {
          WatchListService.removeHome($scope.isRent, mls).then(function () {
            $scope.isWatched = false;
          });
        };
      }
    };
  });
