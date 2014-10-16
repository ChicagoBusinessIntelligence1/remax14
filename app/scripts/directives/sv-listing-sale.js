'use strict';

angular.module('app')
  .directive('svListingSale', function ($firebase, $stateParams, urlBrokers, urlResidential, urlResidentialTemp, $rootScope, $state) {
    return {
      restrict: 'E',
      templateUrl: '../../views/directives/sv-listing-sale.html',
      scope: {
        isDraft: '='
      },
      controller: function ($scope) {
       this.required =['mls', 'state', 'city','zip'];

      },
      link: function ($scope, element, attr) {

        $rootScope.auth.$getCurrentUser().then(function (user) {
          /*take param mls from browser url using stateParams*/
          var mls = $stateParams.mls;
          /*Firebase string reference*/
          if (_.isUndefined(mls)) {
            $scope.houseRepo = urlResidentialTemp;
            $scope.isTemplate = true;
          } else {

            $scope.houseRepo = $scope.isDraft ? urlBrokers + user.id + '/drafts/residential/' + mls : urlResidential + mls;
            $scope.isTemplate = false;
          }

          $scope.houseRef = $firebase(new Firebase($scope.houseRepo));
          $scope.house = $scope.houseRef.$asArray();
          $scope.houseObj = $scope.houseRef.$asObject();

        });
        $scope.saveTemplate = function () {
          var mlsSection = _.find($scope.house, function (el) {
            return !_.isUndefined(el.mls);
          });
          var mls = mlsSection.mls.value;

          var draftRepo = urlBrokers + $rootScope.user.id + '/drafts/residential/' + mls;
          $scope.drafts = $firebase(new Firebase(draftRepo)).$asObject();

          $scope.house.forEach(function (oneHouse) {
            $scope.drafts[oneHouse.$id] = oneHouse;
          })
          $scope.drafts['brokers']=[{
            id:$rootScope.user.id,
            name:$rootScope.user.displayName
          }];
          $scope.drafts.$save().then(function (mls) {
            $state.go('app.profile.drafts');
          });
        };

        $scope.updateHouse = function (sectionIndex,  sectionContent) {
          //when click on button

          $scope.houseObj[sectionIndex]= $scope.house.$getRecord(sectionIndex);
          $scope.houseObj.$save(sectionIndex);
        };
      }
    };
  });
