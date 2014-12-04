'use strict';

angular.module('app')
  .directive('svBtnAddWishHome', function ($modal, urlSale, urlRental, WishListService) {
    return {
      restrict: 'E',
      replace: true,
      template: '<div class="form-group">' +
      '<button class="btn btn-primary btn-sm" name="{{nameId}}" id="{{nameId}}" ng-click="showModal()" >' +
      '<i class="fa fa-plus fa-fw"></i>' +
      'Add Property to Wish List' +
      '</button>' +
      '</div>',
      scope: {
        isRent: '='
      },
      link: function ($scope, element, attr) {
        $scope.addWishHomeModal = $modal(
          {
            scope: $scope,
            title: 'Create a new Wish List Request',
            animation: 'am-fade-and-slide-top',
            template: '../../views/modals/add-wish-home-modal.html',
            show: false
          });

        $scope.showModal = function () {
          $scope.addWishHomeModal.$promise.then($scope.addWishHomeModal.show);
        };

        $scope.saveWishList = function (wishList) {
          WishListService.save(wishList).then(function () {
            $scope.addWishHomeModal.$promise.then($scope.addWishHomeModal.hide);
          });
        };
      }
    };
  });
