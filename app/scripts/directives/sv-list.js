'use strict';

angular.module('app')
  .directive('svList', function (SettingsService, url) {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-list.html',
      scope: {
        sectionProperty: '='
      },
      link: function ($scope, element, attr) {
        var repo = SettingsService.getOptions(sectionProperty.title);
        $scope.posts = $firebase(new Firebase(repo)).$asArray();
      },
      controller: function ($scope) {

      }
    };
  });
