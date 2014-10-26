'use strict';

angular.module('app')
  .directive('svEmailAlertSettings', function () {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-email-alert-settings.html',
      scope: {

      },
      link: function ($scope, element, attr) {

      },
      controller: function ($scope) {
      //this.var=something;
      },
    };
  });
