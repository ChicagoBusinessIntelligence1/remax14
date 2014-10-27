'use strict';

angular.module('app')
  .factory('UserService', function ($firebase, $q, url, $rootScope) {
    return {
      repoUrl: null,
      repoRef: null,

      getUserData: function (fbId) {
        var that = this;
        var userRepo = $rootScope.user.profileType === 'customer' ? url.customers : url.brokers;

        that.repoUrl = userRepo + fbId;
        that.repoRef = $firebase(new Firebase(that.repoUrl));
        var user = that.repoRef.$asObject();

        return user;
      }
    };

  });
