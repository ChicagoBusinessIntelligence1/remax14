'use strict';

angular.module('app')
  .directive('svBtnAction', function () {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-btn-action.html',
      scope: {
        icon: '@',
        action: '&'
      },
      link: function ($scope, element, attr) {
        element.on('click', function (evt) {
          event.stopPropagation();
          $scope.$apply(function () {
            $scope.action();
          })
        })
      }
    };
  });
