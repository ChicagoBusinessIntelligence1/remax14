'use strict';

angular.module('app')
  .directive('svHomeBasicInfo', function (TestService, ) {
    return {
      restrict: 'E',
      templateUrl: '../../views/directives/sv-home-basic-info.html',
      scope: {
        home: '='
      },
      link: function ($scope, element, attr) {
      }
    };
  });
