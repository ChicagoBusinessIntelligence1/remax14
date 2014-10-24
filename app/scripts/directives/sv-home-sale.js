'use strict';

angular.module('app')
  .directive('svHomeSale', function (TestService, InitialValuesService, BrokerService, AddBrokerService, HomeService, $stateParams, $state, $rootScope) {
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
        $scope.home.$loaded(function () {
          $scope.home = InitialValuesService.seed($scope.home, $scope.isTemplate);
        })

        $scope.moveToTrash = function () {
          HomeService.moveToTrash();
        };

        $scope.saveTemplate = function () {
          $scope.home = BrokerService.addBroker($scope.home, $rootScope.user);
          HomeService.saveToDrafts($scope.home).then(function (result) {
            $state.go("app.profile.drafts");
          });
        };

        $scope.updateHomeSection = function (section) {
          HomeService.updateHomeSection(section);
        };
      }
    };
  });
