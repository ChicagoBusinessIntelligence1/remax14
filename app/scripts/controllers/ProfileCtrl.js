'use strict';

angular.module('app')
  .controller('ProfileCtrl', function (ProfileTypeService, $scope, $state, user, $rootScope) {
    if (!_.isEmpty(user)) {
      ProfileTypeService.determine(user).then(function (user) {
        $rootScope.user = user.thirdPartyUserData;
      })
    }
  });
