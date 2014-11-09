'use strict';

angular.module('app')
  .directive('svHomeBasicInfo', function (notifications, $location) {
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

        //var saleRent = $scope.isRent ? 'rent' : 'sale';
        //$scope.sharedUrlEnd = '/remax-home-' + saleRent + '/' + $scope.home.$id;
        //var domainStart = $location.absUrl().indexOf('#');
        //var domain = $location.absUrl().toString().substr(0, domainStart);
        //$scope.sharedUrl = domain + $scope.sharedUrlEnd;
      }
    };
  });
