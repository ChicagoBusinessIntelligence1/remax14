'use strict';

/**
 * @ngdoc function
 * @name app.controller:IndexCtrl
 * @description
 * # IndexCtrl
 * Controller of the app
 */
angular.module('app')
  .controller('IndexCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
