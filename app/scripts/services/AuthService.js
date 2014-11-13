'use strict';

angular.module('app')
  .factory('AuthService', function ($firebase, $q,$rootScope,mainUrl,$firebaseSimpleLogin) {
        return {
          repoUrl: null,
          repoRef: null,

          logOut: function () {

            var mainRef = new Firebase(mainUrl);
            $rootScope = $firebaseSimpleLogin(mainRef);
            $rootScope.$logout();

          }
        };

  });
