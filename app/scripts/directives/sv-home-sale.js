'use strict';

angular.module('app')
  .directive('svHomeSale', function (Broker, AddBrokerService, HomeService, $stateParams, $state, $firebase) {
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
          HomeService.saveTemplate();

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
