'use strict';

angular.module('app')
  .directive('svSignInAlert', function () {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-sign-in-alert.html',
      scope: {

      },
      link: function ($scope, element, attr) {

      }
    };
  });
