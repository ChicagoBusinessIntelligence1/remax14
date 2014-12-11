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

        $($window).resize(function () {
          $scope.$apply(function () {

            $scope.w = percentWidth * $window.innerWidth;
            $scope.h = percentHeight * $window.innerHeight;

          })
        })

        var angle = -Math.PI / 2;
        var angle0 = -2 * Math.PI;

        $scope.nextPage = function (home) {

          home.flip.set(angle, {duration: 1000, curve: 'linear'});


        };

        HousesFrontImagesService.mock().then(function (homes) {
          $scope.activeIndex = 0;
          $scope.allHomes = _.map(homes, function (home) {
            var flip = new Transitionable(0);
            return _.extend(home, {
              flip: flip
            })
          });
          $scope.homes = (_.first($scope.allHomes, 2)).reverse();
        })
      }
    }
  });
