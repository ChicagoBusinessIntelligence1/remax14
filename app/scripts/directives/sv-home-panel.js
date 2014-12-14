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

        var directiveWidth = element.parent().parent().parent()[0].clientWidth;
        ResponsiveSizeService.compute({window: $window, scope: $scope, parentWidth: directiveWidth});
        $scope.bookStyle = config.bookStyle($scope.w);

        $($window).resize(function () {
          $scope.$apply(function () {
            directiveWidth = element.parent().parent().parent()[0].clientWidth;
            ResponsiveSizeService.compute({window: $window, scope: $scope, parentWidth: directiveWidth});
          })
        })

        $scope.nextPage = function (home) {
          HousesFrontImagesService.applyAnimation(home);
          HousesFrontImagesService.resetFlip({homes: $scope.homes, index: $scope.activeIndex});
        };

      }
    }
  });
