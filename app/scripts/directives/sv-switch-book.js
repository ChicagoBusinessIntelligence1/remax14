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
        /*initial value */
        $scope.title = $scope.isRent ? 'sale' : 'rent';
        var Transitionable = $famous['famous/transitions/Transitionable'];
        $scope.myTransitionable = new Transitionable([0, 0, 0]);
        //initial value
        $scope.scale = new Transitionable(1);

        var slidePoint = $scope.w - $scope.h;
        $scope.switcherStyle = {
          //backgroundImage: 'url("../images/home/Sell_Home-64.png") 0 0 no-repeat',
          backgroundColor: '#EA6A67',
          color: 'white',
          borderTopLeftRadius: '1em 3em',
          borderBottomLeftRadius: '1em 3em',
          borderTopRightRadius: '1em 3em',
          borderBottomRightRadius: '1em 3em',
          textShadow: '1px 1px 2px black',
          marginTop: '5px'
        };

        $scope.switchSaleRent = function () {
          if ($scope.isRent) {
            slidePoint = 0;
          } else {
            slidePoint = .7 * ($scope.w - $scope.h);
          }
          $scope.myTransitionable.set([slidePoint, 0, 0], {duration: 1000, curve: 'linear'});
          //switch parameters from sale to rent on click
          $scope.isRent = !$scope.isRent;
          $scope.title = $scope.isRent ? 'sale' : 'rent';
        };

        $scope.scaleUp = function () {
          $scope.scale.set(1.1, {duration: 400, curve: 'easeOut'});
        };
        $scope.scaleBck = function () {
          $scope.scale.set(1, {duration: 200, curve: 'easeOut'});
        }
      }
    };
  });
