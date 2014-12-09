'use strict';

angular.module('app')
  .directive('svHomePanel', function (HousesFrontImagesService, $famous, $window, $timeout) {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-home-panel.html',
      link: function ($scope, element, attr) {
        var Transform = $famous['famous/core/Transform'];
        var Transitionable = $famous['famous/transitions/Transitionable'];
        var EventHandler = $famous['famous/core/EventHandler'];
        var Timer = $famous['famous/utilities/Timer'];
        $scope.colorSkin = '#272727';

        $scope.w = $window.innerWidth;
        $scope.h = $window.innerHeight / 2;
        $scope.hsm = 0.9 * $scope.h;
        $scope.wsm = 1.5 * $scope.hsm;

        $scope.handler = new EventHandler();

        var defaultAngle = -Math.PI / 21;
        $scope.angle = new Transitionable(defaultAngle);
        $scope.opacityFooter = new Transitionable(.8);

        $scope.myStyle = {
          "width": 1.4 * $scope.wsm + "px",
          "height": $scope.h + "px"
        };

        $scope.options = {
          homePageScroll: {
            paginated: true,
            clipSize: $scope.h,
            direction: 1
          }
        };

        var scrollView = ($famous.find('#scrollView')[0]).renderNode;

        HousesFrontImagesService.all().then(function (homes) {
          $scope.homes = homes;
          var velocity = 0.2;
          var decreaser = 0.98;
          var stopValue = 0.03;
          var tick = 3;
          scrollView.setVelocity(velocity);
          Timer.every(function () {
            velocity *= decreaser;
            if (velocity >= stopValue) {
              scrollView.setVelocity(velocity);
            } else {
              scrollView.setVelocity(0);
              Timer.clear(this);
            }
          }, tick);
        });
      }
    }
  });
