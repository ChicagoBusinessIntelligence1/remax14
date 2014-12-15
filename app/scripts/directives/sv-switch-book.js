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
        $scope.title = $scope.isRent ? 'Sale' : 'Rent';
        var Transitionable = $famous['famous/transitions/Transitionable'];
        $scope.myTransitionable = new Transitionable([0, 0, 0]);
        $scope.scale = new Transitionable(1);

        var slidePoint = $scope.w - $scope.h;
        $scope.switcherStyle = {
          backgroundColor: 'red',
          borderRadius: '15px',
          marginTop: '5px'
        };

        $scope.switchSaleRent = function () {
          if ($scope.isRent) {
            slidePoint = 0;
          } else {
            slidePoint = $scope.w - $scope.h;
          }
          $scope.myTransitionable.set([slidePoint, 0, 0], {duration: 1000, curve: 'easeInOut'});
          $scope.isRent = !$scope.isRent;
          $scope.title = $scope.isRent ? 'Sale' : 'Rent';
        };

        $scope.scaleUp = function () {
          $scope.scale.set(1.1,{duration:400,curve:'easeOut'});
        };
        $scope.scaleBack = function () {
          $scope.scale.set(1,{duration:200, curve:'easeOut'});
        }
      }
    };
  });
