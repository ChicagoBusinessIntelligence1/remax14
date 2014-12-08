'use strict';

angular.module('app')
  .directive('svHomePanel', function (HousesFrontImagesService, $famous, $window, $timeout) {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-home-panel.html',
      link: function ($scope, element, attr) {
        $scope.showInfo = function (home) {
          home.infoShift.set([0,0,0],{duration:500, curve:'easeInOut'});
        };
        $scope.hideInfo = function (home) {
          $timeout(function () {
          home.infoShift.set([0, $scope.hsm/5,0],{duration:250,curve:'easeInOut'});
          },200);
        };

        var Transform = $famous['famous/core/Transform'];
        var Transitionable = $famous['famous/transitions/Transitionable'];


        var defaultAngle = -Math.PI /5 ;
        $scope.angle = new Transitionable(defaultAngle);

        var rotationAngle = -Math.PI /350 ;
        var _modPerspective = new Transitionable(10);
        _modPerspective.set(10000, {duration: 10, curve: 'linear'});

        $scope.modPerspective = function(){
          return _modPerspective.get();
        }


        $scope.rotateShift = new Transitionable(rotationAngle);
        //$scope.myTransform = Transform.multiply(Transform.rotateX($scope.angle), Transform.translate(20,20,0), Transform.perspective(1000));
        $scope.w = $window.innerWidth;
        $scope.h = $window.innerHeight/3;

        $scope.hsm = 0.9* $scope.h;
        $scope.wsm = 1.5* $scope.hsm;

        $scope.myStyle = {
          "width" : $scope.w+"px",
          "height" : $scope.h+"px",
          "overflow":"visible"
        };

        $scope.opacityFooter = new Transitionable(.8);
        HousesFrontImagesService.all().then(function (homes) {

          $scope.homes = _.map(homes, function (home) {
            var angle = new Transitionable(defaultAngle);
            var infoShift = new Transitionable([0, $scope.hsm/5,0]);


            return _.extend(home, {
              angle: angle,
              infoShift:infoShift
            })

          });
        });
        var EventHandler = $famous['famous/core/EventHandler'];

        $scope.colors = ['red', 'green', 'blue', 'orange', 'yellow'];
        $scope.getColor = function () {
          var index = Math.floor(Math.random() * 5);
          return $scope.colors[index];
        };
        $scope.handler = new EventHandler();
      }
    }
  });
