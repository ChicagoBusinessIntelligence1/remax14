'use strict';

angular.module('app')
  .directive('svAddFeature', function () {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-add-feature.html',
      scope: {
        house: '=',
        title: '@'
      },
      link: function ($scope, element, attr) {
        $scope.isStateAdded = false;
        $scope.newFieldName = {val: ''};
        $scope.showAddFields = function () {
          $scope.isStateAdded = true;

        };
        $scope.addNewField = function () {
          var name = $scope.newFieldName.val;

          var input = _.str.camelize(name.replace(' ', '-'));
          name = input[0].toLowerCase() + input.substr(1);

          var type = $scope.selectedType;
          var houseProperty = $scope.house[$scope.title];
          var count = Object.keys(houseProperty).length+1;
          var order;
          if (count.toString().length===1) {
           order='0'+count.toString() ;
          } else{
           order=count.toString() ;
          }
          name = order + '_' + name;

          houseProperty[name] = {type: type, value: ''};
          $scope.isStateAdded = false;
          $scope.newFieldName = {val: ''};
          $scope.selectedType = '';
        };
        $scope.cancelNewField = function () {
          $scope.isStateAdded = false;

        };
      }
    };
  });
