'use strict';

angular.module('app')
  .directive('svHomeSale', function (BrokerService, AddBrokerService, HomeService, $stateParams, $state, $rootScope) {
    return {
      restrict: 'E',
      templateUrl: '../../views/directives/sv-home-sale.html',
      scope: {
        isDraft: '='
      },

      controller: function ($scope) {
        this.required = ['mls', 'state', 'city', 'zip'];
      },

      link: function ($scope, element, attr) {

        var mls = $stateParams.mls;
        $scope.isTemplate = mls ? false : true;

        $scope.home = HomeService.getArrayFire(mls, $scope.isDraft);

        $scope.moveToTrash = function () {
          HomeService.moveToTrash();
        };

        $scope.saveTemplate = function () {

          $scope.home = BrokerService.addBroker($scope.home, $rootScope.user);
          HomeService.saveTemplate($scope.home);
        };

        $scope.updateHouse = function (sectionIndex, sectionContent) {
          //when click on button

          $scope.houseObj[sectionIndex] = $scope.ho
            .e.$getRecord(sectionIndex);
          $scope.houseObj.$save(sectionIndex);
        };
      }
    };
  });
