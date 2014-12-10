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
        var LightBox = $famous['famous/views/LightBox'];

        var Easing = $famous['famous/transitions/Easing'];
        $scope.colorSkin = '#272727';

        $scope.w = $window.innerWidth;
        $scope.h = $window.innerHeight;
        $scope.hlg = $window.innerHeight / 2;
        $scope.hsm = 0.5 * $scope.hlg;
        $scope.wsm = 1.5 * $scope.hsm;

        $scope.handler = new EventHandler();

        var defaultAngle = -Math.PI / 22;
        $scope.angle = new Transitionable(defaultAngle);
        $scope.opacityFooter = new Transitionable(.8);

        $scope.myStyle = {
          "width": 1.3*$scope.wsm + "px",
          "height":.9*$scope.h + "px"
        };

        $scope.options = {
          homePageScroll: {
            paginated: true,
            clipSize: $scope.hlg,
            direction: 1
          }
        };

        var scrollView = ($famous.find('#scrollView')[0]).renderNode;

        HousesFrontImagesService.mock().then(function (homes) {
          $scope.homes = _.map(homes, function (home) {
            //var angle = new Transitionable(defaultAngle);
            //var infoShift = new Transitionable([0, $scope.hsm / 5, 0]);

            var size = new Transitionable([$scope.wsm, $scope.hsm]);

            /* extend object home with two properties
             */
            return _.extend(home, {
              size: size
              //infoShift: infoShift
            })
          });
          $scope.homes = homes;
          var velocity = 0.2;
          var decreaser = 0.99;
          var stopValue = 0.05;
          var tick = 2;
          scrollView.setVelocity(velocity);

          Timer.every(function () {
          var activeIndex = scrollView.getCurrentIndex();
          var position = scrollView.getPosition();
            console.log(position);

            //$scope.homes[activeIndex].size.set([.8* $scope.wsm,.8* $scope.hsm], {duration: 5000});
            //$scope.homes[activeIndex].size.set([$scope.wsm,$scope.hsm], {duration: 5000});




            velocity *= decreaser;
            if (velocity >= stopValue) {
              scrollView.setVelocity(velocity);
            } else {
              scrollView.setVelocity(0);
            }
          }, tick);
        });
      }
    }
  });
