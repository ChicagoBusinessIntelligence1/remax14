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
        var Easing = $famous['famous/transitions/Easing'];

        $scope.colorSkin = '#272727';
        var screenSizeLimit = 960;

        var percentWidth = $window.innerWidth > screenSizeLimit ? 0.5 : 1;
        var percentHeight = 0.5;

        $scope.initw = $window.innerWidth;
        $scope.inith = $window.innerHeight;

        $scope.w = percentWidth * $window.innerWidth;
        $scope.h = percentHeight * $window.innerHeight;

        $scope.bookStyle = {
          boxShadow: '0 10px 20px -5px rgba(0, 0, 0, 0.5)',
          marginRight: '15px',
          padding: '15px'
        };

        $scope.homeAppStyle = {
          backgroundColor: 'lighten($scope.colorSkin, 96%)',
          width: $scope.w + 'px',
          height: $scope.inith + 'px'
        };

        $($window).resize(function () {
          $scope.$apply(function () {

            percentWidth = $window.innerWidth > screenSizeLimit ? 0.5 : 1;
            $scope.w = percentWidth * $window.innerWidth;
            $scope.h = percentHeight * $window.innerHeight;

          })
        })

        var angle = -Math.PI / 2;
        var angle0 = -2 * Math.PI;

        $scope.nextPage = function (home) {
          $scope.activeIndex++;

          home.flip.set(angle, {
            duration: 1000,
            curve: 'linear'
          });
          if ($scope.activeIndex == $scope.homes.length) {
            console.log('last');
            $timeout(function () {
              console.log('run');
              $scope.homes = _.map($scope.allHomes, function (home) {
                var flip = new Transitionable(0);
                return _.extend(home, {
                  flip: flip
                })
              });
              $scope.activeIndex = 0;
            }, 850);
          }
        };

        HousesFrontImagesService.mock().then(function (homes) {
          $scope.activeIndex = 0;
          $scope.allHomes = _.map(homes, function (home) {
            var flip = new Transitionable(0);
            return _.extend(home, {
              flip: flip
            })
          });
          $scope.homes = ($scope.allHomes).reverse();
        })
      }
    }
  });
