'use strict';

angular.module('app')
  .directive('svWishListHomes', function (WishListService, urlSale, urlRental) {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-wish-list-homes.html',
      scope: {
        isRent: '='
      },
      link: function ($scope, element, attr) {
        $scope.url = $scope.isRent ? urlRental : urlSale;
        WishListService.all($scope.url).then(function (wishHomes) {
          $scope.wishHomes = wishHomes;
          console.log($scope.wishHomes);
        })
      }
    };
  });
