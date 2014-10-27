'use strict';

angular.module('app')
  .directive('svDelProfile', function () {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-del-profile.html',
      scope: {

      },
      link: function ($scope, element, attr) {

      },
      controller: function ($scope) {
      //this.var=something;
      },
    };
  });
