'use strict';

angular.module('app')
  .directive('svHomeSale', function (HomeService, $stateParams, $state, $firebase) {
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

        $scope.home = HomeService.getArrayFire(mls,$scope.isDraft);

        $scope.moveToTrash = function () {
          HomeService.moveToTrash();
        };

        $scope.saveTemplate = function () {
          var mlsSection = _.find($scope.house, function (el) {
            return !_.isUndefined(el.mls);
          });
          var mls = mlsSection.mls.value;

          var draftRepo = urlBrokers + $rootScope.user.id + '/residential/drafts/' + mls;
          $scope.drafts = $firebase(new Firebase(draftRepo)).$asObject();

          $scope.house.forEach(function (oneHouse) {
            $scope.drafts[oneHouse.$id] = oneHouse;
          })

          $scope.drafts['brokers'] = [{
            id: $rootScope.user.id,
            name: $rootScope.user.displayName
          }];
          $scope.drafts.$save().then(function (mls) {
            $state.go('app.profile.drafts');
          });
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
