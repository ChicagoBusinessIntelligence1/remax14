'use strict';

angular.module('app')
  .controller('ProfileCtrl', function (ProfileTypeService, WatchListService, $scope, $state, user, $rootScope) {

    if (user !== null) {
      var breakPoint=1;
      ProfileTypeService.determine(user).then(function (user) {
        $rootScope.user = user;
        WatchListService.getSaleRentLists().then(function (watchList) {
          $rootScope.user.watchList = watchList;
        })
      })
    } else {
      $rootScope.user = null;
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
