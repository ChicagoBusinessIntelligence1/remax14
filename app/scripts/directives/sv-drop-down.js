'use strict';

angular.module('app')
  .directive('svDropDown', function (url, $firebase) {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-drop-down.html',
      scope: {
        sectionProperty: '='
      },
      link: function ($scope, element, attr) {
        var dropDownRepo = url.residentialSettings + $scope.sectionProperty.title + 's';
        console.log(dropDownRepo);
        var dropDownRef = $firebase(new Firebase(dropDownRepo)).$asArray();
        dropDownRef.$loaded(function (types) {
          $scope.types = types;
          console.log(types);
        })
      }
    };
  });
