'use strict';

angular.module('app')
  .controller('WishListCtrl', function ($scope) {

    $scope.tabs = [
      {
        title: 'Property for Sale',
        view: 'views/tabs/wishList/wishSale.html'
      },
      {
        title: 'Property for Rent',
        view: 'views/tabs/wishList/wishRent.html'
      }];
  });
