'use strict';

angular.module('app')
  .directive('svElements', function () {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'views/directives/sv-elements.html',
      scope:{

      },
      link: function postLink($scope, element, attrs) {

      }
    };
  });
