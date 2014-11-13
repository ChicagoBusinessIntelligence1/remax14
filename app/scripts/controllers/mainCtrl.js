'use strict';

angular.module('app')
  .controller('MainCtrl', function (AuthService, $scope, $firebase, mainUrl, $firebaseSimpleLogin, $state, $rootScope) {

    $rootScope.logoutFb = function () {
      AuthService.logOut();
      $state.go('app.home', null, {reload: true});
    }

    $rootScope.loginFb = function () {

      var mainRef = new Firebase(mainUrl);
      $rootScope = $firebaseSimpleLogin(mainRef);
      $rootScope.$login('facebook',
        {
          scope: 'email,user_likes'
        }
      ).then(function (user) {
          $rootScope.user = user.thirdPartyUserData;
          $state.go('app.profile.user-profile', null, {reload: true});
        });
    }
  });
