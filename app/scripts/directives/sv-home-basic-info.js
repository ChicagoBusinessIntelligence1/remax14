'use strict';

angular.module('app')
  .directive('svHomeBasicInfo', function (WatchListService, $rootScope) {
    return {
      restrict: 'E',
      templateUrl: '../../views/directives/sv-home-basic-info.html',
      scope: {
        home: '='
      },
      require: '^sv-homes-list',
      link: function ($scope, element, attr, svRentalsCtrl) {

        //$scope.watchList = $rootScope.user.watchList;

        $rootScope.$watch('user', function (user) {

          if (_.isUndefined(user)) {
            return;
          }

        $scope.isWatched = $rootScope.user.watchList.indexOf($scope.home.$id)>-1;
        });


        $scope.isRent = svRentalsCtrl.isRent;

        $scope.addToWatchList = function (mls) {
          WatchListService.addHome(mls).then(function () {
            toastr.success('home is added to your list');
          });

        };
      }
    };
  });
