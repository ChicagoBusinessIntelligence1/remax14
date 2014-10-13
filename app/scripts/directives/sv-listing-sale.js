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
          var houseRepo = urlResidentialTemp;
          $scope.isTemplate = true;
        } else {
          var houseRepo = urlResidential + mls;
          $scope.isTemplate = false;
        }

        $scope.house = $firebase(new Firebase(houseRepo)).$asObject();
        $scope.house.$loaded(function () {

          var addr = _.toArray(_.toArray($scope.house)[3]);
          $scope.address = addr[0].value + ', ' + addr[1].value + ' ' + addr[2].value + ' ' + addr[3].value;
        })

        $scope.updateHouse = function (sectionTitle, sectionContent) {
          //when click on button
          $scope.house[sectionTitle] = sectionContent;
          $scope.house.$save();
        };
      }
    };
  });
