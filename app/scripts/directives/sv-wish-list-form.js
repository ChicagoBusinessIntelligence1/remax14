'use strict';

angular.module('app')
  .directive('svWishListForm', function () {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-wish-list-form.html',
      scope: {

      },
      link: function ($scope, element, attr) {

      }
    };
  });
