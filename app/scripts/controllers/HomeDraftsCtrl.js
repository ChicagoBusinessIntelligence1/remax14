'use strict';

angular.module('app')
  .controller('HomeDraftsCtrl', function (DraftsService, $scope, $firebase, $rootScope) {
    $scope.homeStatus = 'draft';

    $scope.tabs = [
      {
        title: 'Property for Sale',
        view: 'views/tabs/saleRent/sale.html'
      },
      {
        title: 'Property for Rent',
        view: 'views/tabs/saleRent/rent.html'
      }
    ];
  });
