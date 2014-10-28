'use strict';

angular.module('app')
  .directive('svSavedSearch', function () {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-saved-search.html',
      scope: {},
      link: function ($scope, element, attr) {
        $scope.search = {
          name: "Skokie",
          details: "At vero eos et accusamus et iusto odio dignissimos ducimus"
        };
      }
    };
  });
