'use strict';

angular.module('app')
  .directive('svSpinner', function () {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-spinner.html',
      scope: {

      },
      link: function ($scope, element, attr) {

      },
      controller: function ($scope) {
      //this.var=something;
      },
    };
  });
