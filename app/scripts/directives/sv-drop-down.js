'use strict';

angular.module('app')
  .directive('svDropDown', function (url, $firebase) {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-drop-down.html',
      scope: {
        sectionProperty: '='
      },
      link: function ($scope, element, attr) {
        console.log('here');
      }
    };
  });
