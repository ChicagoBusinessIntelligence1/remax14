'use strict';

angular.module('app')
  .controller('MainCtrl', function (AuthService, $scope, $firebaseAuth, mainUrl, $state, $rootScope, $location) {

    $scope.isFirstPage = $location.path() === '/home';
    $rootScope.logoutFb = function () {
      AuthService.logOut();
      $rootScope.user = null;
      $state.go('home', null, {reload: true});
    }

    $rootScope.loginFb = function () {

      var mainRef = new Firebase(mainUrl);
      $scope.authObj = $firebaseAuth(mainRef);

      $scope.authObj.$authWithOAuthPopup("facebook").then(function (authData) {
        $rootScope.user = authData.facebook.cachedUserProfile;
        console.log("Logged in as:", authData.uid);
      }).catch(function (error) {
        console.error("Authentication failed:", error);
      });
    }
  });
