'use strict';

angular.module('app')
  .directive('svHomePanel', function (HousesFrontImagesService, ResponsiveSizeService, $famous, $window, $timeout, responsiveGallerySettings) {
    return {
      restrict: 'E',
      replace: true,
      require: '^sv-flip-container',
      //scope:{
      //  bothShown:'=',
      //  rentShown:'=',
      //  isRent:'='
      //},
      templateUrl: '../../views/directives/sv-home-panel.html',
      link: function ($scope, element, attr,ctrl) {
        var config = responsiveGallerySettings;

        HousesFrontImagesService.mock($scope.isRent).then(function (homes) {
          $scope.activeIndex = {val: 0};
          $scope.homes = homes;
        })

        $scope.nextPage = function (home) {

          HousesFrontImagesService.applyAnimation(home);
          HousesFrontImagesService.resetFlip({homes: $scope.homes, index: $scope.activeIndex});
        };

        var viewContentWidth = element.parent().parent().parent()[0].clientWidth;
        ResponsiveSizeService.compute({window: $window, scope: $scope, viewContentWidth: viewContentWidth});
        $scope.bookStyle = config.bookStyle($scope.w);

        $scope.bothShown = viewContentWidth / $scope.w >= 2;
        $($window).resize(function () {
          $scope.$apply(function () {
            viewContentWidth = element.parent().parent().parent()[0].clientWidth;
            ResponsiveSizeService.compute({window: $window, scope: $scope, viewContentWidth: viewContentWidth});
            $scope.bothShown = viewContentWidth / $scope.w >= 2;
            $scope.bookStyle = config.bookStyle($scope.w);
          })
        })
      }
    }
  });
