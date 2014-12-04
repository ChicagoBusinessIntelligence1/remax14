'use strict';

angular.module('app')
  .directive('svDelFromWish', function ($popover, notifications) {
    return {
      restrict: 'E',
      replace: true,
      template: '<button class="btn btn-danger btn-sm"><i class="fa fa-trash fa-fw"></i></button>',
      scope: {
        removeWishList: '&'
      },
      link: function ($scope, element, attr) {
        var removeFromWish = $popover(element, {
          container: 'body',
          template: '../../views/popover/remove-from-wish-popover.html',
          placement: 'bottom',
          scope: $scope
        });
      }
    };
  });
