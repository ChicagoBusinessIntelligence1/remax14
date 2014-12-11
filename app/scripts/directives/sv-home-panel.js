'use strict';

angular.module('app')
  .directive('svHomePanel', function (HousesFrontImagesService, $famous, $window) {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-home-panel.html',
      link: function ($scope, element, attr) {
        var Transform = $famous['famous/core/Transform'];
        var Transitionable = $famous['famous/transitions/Transitionable'];
        var EventHandler = $famous['famous/core/EventHandler'];
        var Easing = $famous['famous/transitions/Easing'];

        $scope.colorSkin = '#272727';
        var percentWidth = 0.5;
        var percentHeight = 0.3;



        $scope.w = percentWidth * $window.innerWidth;
        $scope.h = percentHeight * $window.innerHeight;

        $scope.myStyle = {
          'width': $scope.w+'px',
          'height': $scope.h+'px'
        }

        $($window).resize(function () {
          $scope.$apply(function () {

            $scope.w = percentWidth * $window.innerWidth;
            $scope.h = percentHeight * $window.innerHeight;

            $scope.myStyle = {
              'width': $scope.w+'px',
              'height': $scope.h+'px'
            }
          })
        })



        HousesFrontImagesService.mock().then(function (homes) {
          $scope.homes = _.map(homes, function (home) {
            var shift = new Transitionable([0, 0, 0]);

            var size = new Transitionable([$scope.wsm, $scope.hsm]);

            return _.extend(home, {
              size: size,
              shift: shift
            })
          });
          $scope.homes = homes;
        })
      }
    }
  });
