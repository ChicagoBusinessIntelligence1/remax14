'use strict';

angular.module('app')
  .directive('svSwitchBook', function ($famous) {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-switch-book.html',
      scope: {},
      link: function ($scope, element, attr) {
        var Transitionable = $famous['famous/transitions/Transitionable'];

        $scope.myTransitionable = new Transitionable([0, 0, 0]);

        $scope.animate = function() {
          console.log('Hello');
          $scope.myTransitionable.set([100, 0, 0], {duration: 1000, curve: 'easeInOut'})
        };

      }
    };
  });
