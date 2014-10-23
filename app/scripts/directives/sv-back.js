'use strict';

angular.module('app')
  .directive('svBack', ['$window', function ($window) {
    return {
      restrict: 'A',
      link: function ($scope, elem, attr) {
        elem.bind('click', function () {
          $window.history.back();
        });
      }
    };
  }]);
