'use strict';

angular.module('app')
  .directive('svHomePanel', function (HousesFrontImagesService, ResponsiveSizeService, $famous, $window, $timeout, flipSettings) {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-home-panel.html',
      link: function ($scope, element, attr) {
        var config = flipSettings;

        HousesFrontImagesService.mock().then(function (homes) {
          $scope.activeIndex = {val: 0};
          $scope.homes = homes;
        })

        ResponsiveSizeService.compute({window: $window, scope: $scope});
        $scope.bookStyle = config.bookStyle($scope.w);

        $($window).resize(function () {
          $scope.$apply(function () {
            ResponsiveSizeService.compute({window: $window, scope: $scope,parentWidth:angular.element(element)[0].clinetWidth});
          })
        })

        $scope.nextPage = function (home) {
          HousesFrontImagesService.applyAnimation(home);
          HousesFrontImagesService.resetFlip({homes: $scope.homes, index: $scope.activeIndex});
        };


      }
    }
  });
