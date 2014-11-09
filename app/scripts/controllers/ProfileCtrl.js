'use strict';

angular.module('app')
  .controller('ProfileCtrl', function (ProfileTypeService, WatchListService, $scope, $state, user, $rootScope) {
    if (!_.isEmpty(user)) {
      ProfileTypeService.determine(user).then(function (user) {
        $rootScope.user = user.thirdPartyUserData;
        WatchListService.getSaleRentLists().then(function (watchList) {
          $rootScope.user.watchList = watchList;
        })
      })
    }

    $scope.tabs = [
      {
        title: 'PROPERTY FOR SALE',
        view: 'views/tabs/search/searchSale.html'
      },
      {
        title: 'PROPERTY FOR RENT',
        view: 'views/tabs/search/searchRent.html'
      }
    ];
  });
