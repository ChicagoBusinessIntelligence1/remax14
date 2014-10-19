'use strict';

angular.module('app')
  .controller('ProfileCtrl', function ($scope, user, $rootScope) {
    $rootScope.user = user;

  });
