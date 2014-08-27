/* global Firebase */

'use strict';

angular.module('fengshui')
  .controller('MainCtrl', function ($scope, $firebase) {
  	// now we can use $firebase to synchronize data between clients and the server!
    var ref = new Firebase('https://fengshui2.firebaseio.com/colors');
    $scope.colors = $firebase(ref).$asArray();
    
  });
