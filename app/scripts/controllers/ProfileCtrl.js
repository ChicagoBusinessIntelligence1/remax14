'use strict';

angular.module('app')
  .controller('ProfileCtrl', function (ProfileTypeService, $scope,$state, user, $rootScope) {
    if (user === null) {
      toastr.warning('Please sign in');
      $state.go('login');
    } else {

      ProfileTypeService.determine(user).then(function (user) {
        $rootScope.user = user;
      })
    }
  });
