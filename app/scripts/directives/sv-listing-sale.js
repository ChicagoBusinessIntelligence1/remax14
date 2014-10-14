'use strict';

angular.module('app')
  .directive('svListingSale', function ($firebase, $stateParams, urlResidential, urlResidentialTemp) {
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

          var addr = _.toArray(_.toArray($scope.house)[3]);
        })

        $scope.updateHouse = function (sectionTitle, sectionContent) {
          //when click on button
          $scope.house[sectionTitle] = sectionContent;
          $scope.house.$save();
        };
      }
    };
  });
