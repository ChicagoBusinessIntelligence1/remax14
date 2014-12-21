'use strict';

angular.module('app')
  .directive('svSwitchBook', function ($famous, $timeout) {
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

        var node = $famous.find('fa-draggable')[0].modifier;
        node.on('end', function (data) {
	        var position = data.position[0];
          console.log(position);
          if (position>(0.3* $scope.w)) {
            $scope.myTransitionable.set([0.7* $scope.w-position,0,0],{duration:500})
          } else{

            $scope.myTransitionable.set([-position,0,0],{duration:500})
          }
        });

        $scope.title = $scope.isRent ? 'sale' : 'rent2';
        $scope.myTransitionable = new Transitionable([0, 0, 0]);
        $scope.scale = new Transitionable(1);
        var slidePoint;

        //$scope.handler.on('drag', function (event, ev) {
        //  console.log(event);
        //  console.log(ev);
        //});
        var Timer = $famous['famous/utilities/Timer'];
        //$scope.handler.on('mouseup', function (event2, data2) {
        //  var pos = this.getPosition();
        //  console.log(pos);
        //  console.log(event2);
        //  console.log(data2);
        //})
        var shifter = 0;
        var funcRef;
        //test.on('mousedown', function (event) {
        //  funcRef = Timer.every($scope.shiftFunc, 1);
        //})
        //test.on('mouseup', function (event) {
        //  $scope.myTransitionable.set([$scope.w * 0.7, 0, 0], {duration: 500});
        //});
        //$scope.shiftFunc = function () {
        //  shifter = test._matrix[13];
        //  console.log(shifter);
        //  if (shifter!==0) {
        //    $scope.myTransitionable.set([0,-shifter,0]);
        //  }
        //};

        //Timer.every(function() {
        //  var pos  = test._matrix;
        //  console.log(pos);
        //
        //},1);
        //.on('drag', function (event) {
        //  console.log(event)
        //})
        //test.on('mousedown', function (event) {
        //  console.log(event);
        //  console.log($scope.handler);
        //});
        var breakPoint = 1;

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
