'use strict';

angular.module('app')
  .controller('HomesSharedCtrl', function ($scope, $firebase, $rootScope) {
    $scope.homeStatus = 'active';

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
