'use strict';

angular.module('app')
  .directive('svUserDashboard', function () {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-user-dashboard.html',
      scope: {

      },
      link: function ($scope, element, attr) {

      },
      controller: function ($scope) {
      //this.var=something;
      }
    };
  });
