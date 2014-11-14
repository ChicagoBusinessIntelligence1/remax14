'use strict';

angular.module('app')
  .directive('svPhotoGallery', function () {
    return {
      restrict: 'E',
      replace: true,
      scope: {
        home: '='
      },
      templateUrl: '../../views/directives/sv-photo-gallery.html',
      link: function ($scope, element, attr) {
        $scope.$watch('home[0].content.images', function (newValue, oldValue) {
          if (_.isUndefined(newValue)) {
            return;
          }
          $scope.selectedImage = _.first(newValue);
        });
        $scope.setSelectedImage = function (url) {
          console.log(url);
          $scope.selectedImage = url;
        };

      }
    };
  });
