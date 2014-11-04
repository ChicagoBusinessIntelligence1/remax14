'use strict';

angular.module('app')
  .directive('svDropDown', function (urlCommon, $firebase) {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-drop-down.html',
      scope: {
        sectionProperty: '='
      },
      link: function ($scope, element, attr) {
        var dropDownRepo = urlCommon.residentialSettings + $scope.sectionProperty.title + 's';
        var dropDownRef = $firebase(new Firebase(dropDownRepo)).$asArray();
        dropDownRef.$loaded(function (types) {
          $scope.types = types;
        })
      }
    };
  });
