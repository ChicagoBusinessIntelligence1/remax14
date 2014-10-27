'use strict';

angular.module('app')
  .directive('svLinkUserProfile', function () {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-link-user-profile.html',
      scope: {

      },
      link: function ($scope, element, attr) {

      },
      controller: function ($scope) {
      //this.var=something;
      },
    };
  });
