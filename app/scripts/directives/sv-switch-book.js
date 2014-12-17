'use strict';

angular.module('app')
  .directive('svSwitchBook', function ($famous) {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-switch-book.html',
      scope: {
        isRent: '=',
        w: '=',
        h: '='
      },
      link: function ($scope, element, attr) {
        var Transitionable = $famous['famous/transitions/Transitionable'];
        var EventHandler = $famous['famous/core/EventHandler'];
        $scope.handler = new EventHandler();
        //initial values
        $scope.bookOpacity = new Transitionable(0);

        $scope.title = $scope.isRent ? 'sale' : 'rent';
        $scope.myTransitionable = new Transitionable([0, 0, 0]);
        $scope.scale = new Transitionable(1);
        var slidePoint;

        $scope.switchSaleRent = function () {
          if ($scope.isRent) {
            slidePoint = 0;
          } else {
            slidePoint = .7 * ($scope.w - $scope.h);
          }
          $scope.myTransitionable.set([slidePoint, 0, 0], {duration: 2000, curve: 'linear'});
          //switch parameters from sale to rent on click
          $scope.isRent = !$scope.isRent;
        };

        $scope.scaleUp = function () {
          $scope.scale.set(1.1, {duration: 400, curve: 'easeOut'});
        };
        $scope.scaleBck = function () {
          $scope.scale.set(1, {duration: 400, curve: 'easeOut'});
        };

      }
    };
  });
