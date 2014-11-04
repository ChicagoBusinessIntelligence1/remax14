'use strict';

angular.module('app')
  .directive('svAllRentalApartments', function () {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-all-rental-apartments.html',
      scope: {

      },
      link: function ($scope, element, attr) {

      }
    };
  });
