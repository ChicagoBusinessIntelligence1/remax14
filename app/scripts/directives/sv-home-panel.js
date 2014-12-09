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

        $scope.colorSkin = '#272727';
        $scope.w = $window.innerWidth;
        $scope.h = $window.innerHeight / 2;
        $scope.hsm = 0.9 * $scope.h;
        $scope.wsm = 1.5 * $scope.hsm;

        var defaultAngle = -Math.PI / 21;
        $scope.angle = new Transitionable(defaultAngle);

        $scope.myStyle = {
          "width": 1.4 * $scope.wsm + "px",
          "height": $scope.h + "px"
        };
        $scope.listingStyle = {
          "z-index": "99"
        };

        $scope.opacityFooter = new Transitionable(.8);
        HousesFrontImagesService.all().then(function (homes) {

          $scope.homes = _.map(homes, function (home) {
            var angle = new Transitionable(defaultAngle);
            var infoShift = new Transitionable([0, $scope.hsm / 5, 0]);

            return _.extend(home, {
              angle: angle,
              infoShift: infoShift
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
