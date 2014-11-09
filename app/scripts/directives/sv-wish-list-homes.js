'use strict';

angular.module('app')
  .directive('svWishListHomes', function (WishListService, urlSale, urlRental, $modal) {
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
        })
        $scope.removeWishList = function (key) {
          WishListService.remove(key);
        };

        $scope.saveWishList = function (wishList) {
          WishListService.update(wishList).then(function () {
            $scope.editWishList.$promise.then($scope.editWishList.hide);
          });
        }

        $scope.editList = function (key, index) {
          $scope.wishList =angular.copy($scope.wishHomes[index]);
          $scope.editWishList = $modal(
            {
              scope: $scope,
              title: 'Edit a new Wish List Request',
              animation: 'am-fade-and-slide-top',
              template: '../../views/modals/add-wish-home-modal.html',
              show: true
            });
        };
      }
    };
  });
