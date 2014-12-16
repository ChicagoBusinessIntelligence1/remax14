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
          $scope.title = $scope.isRent ? 'sale' : 'rent';
          $scope.bookOpacity.set(1, {duration: 2000});
        };

        $scope.scaleUp = function () {
          $scope.scale.set(1.1, {duration: 400, curve: 'easeOut'});
        };
        $scope.scaleBck = function () {
          $scope.scale.set(1, {duration: 400, curve: 'easeOut'});
        };

        $scope.switcherStyle = {
          //backgroundImage: 'url("../images/home/Sell_Home-64.png") 0 0 no-repeat',
          backgroundColor: '#EA6A67',
          color: 'white',
          borderTopLeftRadius: '1em 3em',
          borderBottomLeftRadius: '1em 3em',
          borderTopRightRadius: '1em 3em',
          borderBottomRightRadius: '1em 3em',
          textShadow: '1px 1px 2px black',
          boxShadow: '1px 1px 2px grey',
          border: '1px 1px 1px 1px red inset',
          marginTop: '5px'
        }
      }
    };
  });
