'use strict';

angular.module('app')
  .factory('UserService', function ($firebase, $q, url, $rootScope) {
    return {
      repoUrl: null,
      repoRef: null,

      getProfile: function (fbId) {
        var that = this;
        var userRepo = $rootScope.user.profileType === 'customer' ? url.customers : url.brokers;

        that.repoUrl = userRepo + fbId + /profile/;
        that.repoRef = $firebase(new Firebase(that.repoUrl));
        return that.repoRef.$asObject();
      },
      saveProfile: function (profile) {
        this.repoRef.$set(profile).then(function () {
          toastr.success('Profile has been saved');
        });
      }
    };

  });
