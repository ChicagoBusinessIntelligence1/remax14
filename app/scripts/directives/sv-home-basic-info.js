'use strict';

angular.module('app')
  .directive('svHomeBasicInfo', function (notifications, $location, HomeService) {
    return {
      restrict: 'E',
      templateUrl: '../../views/directives/sv-home-basic-info.html',
      scope: {
        home: '='
      },
      require: '^sv-homes-list',
      link: function ($scope, element, attr, svRentalsCtrl) {
        $scope.isRent = svRentalsCtrl.isRent;
        $scope.addToWatch = notifications.addToWatch;
        $scope.removeFromWatch = notifications.removeFromWatch;

        var imageSection = HomeService.findSection($scope.home, 'images');
        if (!_.isUndefined(imageSection)) {
          if (!_.isUndefined(imageSection.content)) {
            $scope.coverImage = imageSection.content[0];

          }
        }
      }
    };
  });
