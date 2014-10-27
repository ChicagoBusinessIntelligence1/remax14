'use strict';

angular.module('app')
  .directive('svBtnNotifications', function () {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-btn-notifications.html',
      scope: {

      },
      link: function ($scope, element, attr) {

      },
      controller: function ($scope) {
      //this.var=something;
      },
    };
  });
