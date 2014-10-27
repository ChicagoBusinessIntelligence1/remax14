'use strict';

angular.module('app')
  .directive('svSaveUserProfileInfo', function () {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-save-user-profile-info.html',
      scope: {

      },
      link: function ($scope, element, attr) {

      },
      controller: function ($scope) {
      //this.var=something;
      },
    };
  });
