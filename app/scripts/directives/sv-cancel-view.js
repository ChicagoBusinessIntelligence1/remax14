'use strict';

angular.module('app')
  .directive('svCancelView', function ($state) {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-cancel-view.html',
      scope: {},
      link: function ($scope, element, attr) {
        $scope.cancelView = function () {
          $state.go('app.profile.drafts');
        };
      }
    };
  });
