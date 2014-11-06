'use strict';

angular.module('app')
  .directive('svBtnAddWishHome', function ($modal) {
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
        form: '='
      },
      link: function ($scope, element, attr) {

        var addWishHomeModal = $modal(
          {
            scope: $scope,
            title: 'Create a new Wish List Request',
            animation: 'am-fade-and-slide-top',
            template: '../../views/modals/add-wish-home-modal.html',
            show: false
          });
        $scope.showModal = function () {
          addWishHomeModal.$promise.then(addWishHomeModal.show);
        };
      }
    };
  });
