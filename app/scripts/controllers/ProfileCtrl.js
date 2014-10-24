'use strict';

angular.module('app')
  .controller('ProfileCtrl', function (ProfileTypeService, $scope, user, $rootScope) {
    $rootScope.user = user;

  });
