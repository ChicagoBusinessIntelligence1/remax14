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

        $scope.nextPage = function (home) {
          HousesFrontImagesService.applyAnimation(home);
          HousesFrontImagesService.resetFlip({homes: $scope.homes, index: $scope.activeIndex});
        };

        var viewContentWidth = element.parent()[0].clientWidth;
        ResponsiveSizeService.compute({window: $window, scope: $scope, viewContentWidth: viewContentWidth});
        $scope.bookStyle = config.bookStyle($scope.w);

        $scope.showBoth = viewContentWidth / $scope.w >= 2;
        $($window).resize(function () {
          $scope.$apply(function () {
            viewContentWidth = element.parent()[0].clientWidth;
            ResponsiveSizeService.compute({window: $window, scope: $scope, viewContentWidth: viewContentWidth});
            $scope.showBoth = viewContentWidth / $scope.w >= 2;
            $scope.bookStyle = config.bookStyle($scope.w);
          })
        })
      }
    }
  });
