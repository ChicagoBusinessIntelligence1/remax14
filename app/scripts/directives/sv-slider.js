'use strict';

angular.module('app')
  .directive('svSlder', function () {
    return {
      restrict: 'A',
      scope: {
        h: '@'
      },
      link: function (scope, element, attrs) {
        element.slimScroll({height: scope.h + 'px'});
      }
    };
  });
