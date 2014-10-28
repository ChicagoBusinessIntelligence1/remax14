'use strict';

angular.module('app')
  .controller('MainCtrl', function ($scope, $firebase, mainUrl, $firebaseSimpleLogin, $state, $rootScope) {

    $scope.logoutFb = function () {
      var mainRef = new Firebase(mainUrl);
      $rootScope.auth = $firebaseSimpleLogin(mainRef);
      $rootScope.auth.$logout();
      $rootScope.user = null;
      $state.go('app.home', null, {reload: true});
    }

    $scope.loginFb = function () {

      var mainRef = new Firebase(mainUrl);
      $rootScope.auth = $firebaseSimpleLogin(mainRef);
      $rootScope.auth.$login('facebook',
        {
          scope: 'email,user_likes'
        }
      ).then(function (user) {
          $rootScope.user = user.thirdPartyUserData;
          $state.go('app.profile.user-profile', null, {reload: true});
        });
    }
  });
