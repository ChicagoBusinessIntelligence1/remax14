'use strict';

angular.module('app')
  .directive('svListingSale', function ($firebase, $stateParams, urlBrokers, urlResidential, urlResidentialTemp, $rootScope) {
    return {
      restrict: 'E',
      templateUrl: '../../views/directives/sv-listing-sale.html',
      scope: {},
      link: function ($scope, element, attr) {

        /*take param mls from browser url using stateParams*/
        var mls = $stateParams.mls;
        /*Firebase string reference*/
        if (_.isUndefined(mls)) {
          $scope.houseRepo = urlResidentialTemp;
          $scope.isTemplate = true;
        } else {
          $scope.houseRepo = urlResidential + mls;
          $scope.isTemplate = false;
        }

        $scope.house = $firebase(new Firebase($scope.houseRepo)).$asArray();
        $scope.house.$loaded(function () {
          var n = 0;
        })

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

          $scope.drafts.$save();
        };

        $scope.updateHouse = function (sectionTitle, sectionContent) {
          //when click on button
          $scope.house[sectionTitle] = sectionContent;
          $scope.house.$save();
        };
      }
    };
  });
