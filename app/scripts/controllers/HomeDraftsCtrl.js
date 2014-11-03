'use strict';

angular.module('app')
  .controller('HomeDraftsCtrl', function (DraftsService, $scope, $firebase, $rootScope) {
    $scope.homeStatus = 'draft';
  });
