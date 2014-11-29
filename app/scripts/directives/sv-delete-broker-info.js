'use strict';

angular.module('app')
  .directive('svDeleteBrokerInfo', function () {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-delete-broker-info.html',
      scope: {

      },
      link: function ($scope, element, attr) {

      }
    };
  });
