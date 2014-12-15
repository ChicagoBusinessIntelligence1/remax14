'use strict';

angular.module('app')
  .directive('svSwitchBook', function ($famous) {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-switch-book.html',
      scope: {
        isRent:'='
      },
      link: function ($scope, element, attr) {
        var Transitionable = $famous['famous/transitions/Transitionable'];

        $scope.myTransitionable = new Transitionable([0, 0, 0]);

        var slidePoint = 400;

        $scope.switchButtonStyle = {
          backgroundColor: 'red'
        };

        $scope.switchSaleRent = function () {
          if ($scope.isRent) {
            slidePoint = 0;
          } else {
            slidePoint = 400;
          }
          $scope.myTransitionable.set([slidePoint, 0, 0], {duration: 1000, curve: 'easeInOut'});
          $scope.isRent = !$scope.isRent;
        };

      }
    };
  });
