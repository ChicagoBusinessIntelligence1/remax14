'use strict';

angular.module('app')
  .directive('svHomeSaleHeader', function () {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-home-sale-header.html',
      scope: {
        isTemplate: '=',
        saveTemplate: '&',
        draft: '=',
        deleteDraft:'&'
      },
      require: 'sv-home-display-slider',
      link: function ($scope, element, attr, svDisplayCtrl) {
        $scope.ngFormName = svDisplayCtrl.ngFormName;
        $scope.mlsViaForms = 'homeForm.'+ $scope.ngFormName+'.mls'

      }
    };
  });
