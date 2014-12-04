'use strict';

angular.module('app')
  .factory('AuthService', function ($firebaseAuth, $q,$rootScope,mainUrl) {
        return {
          repoUrl: null,
          repoRef: null,

          logOut: function () {

            var ref = new Firebase(mainUrl);
            $rootScope.authObj = $firebaseAuth(ref);
            $rootScope.authObj.$unauth();
          }
        };

  });
