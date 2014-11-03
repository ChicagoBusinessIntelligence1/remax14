'use strict';

angular.module('app')
  .controller('HomeDraftsCtrl', function (DraftsService, $scope, $firebase, $rootScope) {
    $scope.isDraft=true;
  });
