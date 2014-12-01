'use strict';

angular.module('app')
  .directive('svHomePageSearch', function ($rootScope, estateTypes, $state) {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-home-page-search.html',
      scope: {},
      link: function ($scope, element, attr) {
        var nameType;
        $scope.property = {value: 'sale'};

        $scope.estateTypes = estateTypes;

        $scope.mainSearch = function () {

          if (_.isUndefined($scope.query)) {
            return;
          }

          if ($scope.property.value === 'rent') {
            nameType = 'rent';
          } else {
            nameType = 'sale';
          }
          var stateName = "app.structure.search-" + nameType + "-results";
          $rootScope.query = $scope.query;
          $state.go(stateName, null, {reload: true});
        };
      }
    };
  });
