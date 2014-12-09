'use strict';

angular.module('app')
  .directive('svHomePanel', function (GetNodeService HousesFrontImagesService, $famous, $window, $timeout) {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-home-panel.html',
      link: function ($scope, element, attr) {
        var Transform = $famous['famous/core/Transform'];
        var Transitionable = $famous['famous/transitions/Transitionable'];
        var EventHandler = $famous['famous/core/EventHandler'];

        $scope.colorSkin = '#272727';
        $scope.w = $window.innerWidth;
        $scope.h = $window.innerHeight / 2;
        $scope.hsm = 0.9 * $scope.h;
        $scope.wsm = 1.5 * $scope.hsm;

        var defaultAngle = -Math.PI / 21;
        $scope.angle = new Transitionable(defaultAngle);
        $scope.opacityFooter = new Transitionable(.8);

        $scope.myStyle = {
          "width": 1.4 * $scope.wsm + "px",
          "height": $scope.h + "px"
        };

        HousesFrontImagesService.all().then(function (homes) {
          //$scope.homes = _.map(homes, function (home) {
          //  var angle = new Transitionable(defaultAngle);
          //  var infoShift = new Transitionable([0, $scope.hsm / 5, 0]);
          //
          //  /* extend object home with two properties
          //   */
          //  return _.extend(home, {
          //    angle: angle,
          //    infoShift: infoShift
          //  })
          //});
          $scope.homes = homes;

        });

        $scope.colors = ['red', 'green', 'blue', 'orange', 'yellow'];
        $scope.getColor = function () {
          var index = Math.floor(Math.random() * 5);
          return $scope.colors[index];
        };
        $scope.handler = new EventHandler();
      }
    }
  });
