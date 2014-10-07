'use strict';

angular.module('app')
  .directive('svListingSale', function ($firebase) {
    return {
      restrict: 'E',
      templateUrl: '../../views/directives/sv-listing-sale.html',
      scope: {},
      link: function ($scope, element, attr) {

        var repo = 'https://remax14.firebaseio.com/houses/house1';
        var house1 = $firebase(new Firebase(repo)).$asObject();
        house1.$bindTo($scope, 'house1');

      }
    };
  });
