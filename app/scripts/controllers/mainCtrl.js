'use strict';

angular.module('app')
  .controller('MainCtrl', function (AuthService, $timeout, ProfileTypeService, WatchListService, $scope, $firebaseAuth, mainUrl, $state, $rootScope, $location) {

    $scope.isFirstPage = $location.path() === '/home';
    $rootScope.logoutFb = function () {
      var ref = new Firebase(mainUrl);
      $rootScope.authObj.$unauth();
      $rootScope.user = null;
      $state.go('app.home', null, {reload: true});

    }

    $rootScope.loginFb = function () {

      var mainRef = new Firebase(mainUrl);
      var breakPoint = 1;
      $rootScope.authObj = $firebaseAuth(mainRef);

      $rootScope.authObj.$authWithOAuthPopup("facebook").then(function (authData) {
        var user = authData.facebook.cachedUserProfile;
        ProfileTypeService.determine(user).then(function (user) {
          $rootScope.user = user;
          WatchListService.getSaleRentLists().then(function (watchList) {
            $rootScope.user.watchList = watchList;
          })
        });
        console.log("Logged in as:", authData.uid);
      }).catch(function (error) {
        console.error("Authentication failed:", error);
      });
    }
  });
