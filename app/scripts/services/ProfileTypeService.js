'use strict';

angular.module('app')
  .factory('ProfileTypeService', function ($firebase, $q, urlCommon,$rootScope) {
    return {
      repoUrl: null,
      repoRef: null,

      determine: function (user) {
        var user2=$rootScope.user;
        var that = this;
        var defered = $q.defer();

        var email = user.thirdPartyUserData.email;

        that.repoUrl = urlCommon.registeredBrokers;
        that.repoRef = $firebase(new Firebase(that.repoUrl));
        var regBrokers = that.repoRef.$asArray();
        regBrokers.$loaded(function () {
          var profileType = 'customer';
          for (var i = 0; i < regBrokers.length; i++) {
            var broker = regBrokers[i];
            if (broker.$value === email) {
              profileType = 'broker';
            }
          }
          user.thirdPartyUserData.profileType = profileType;
          defered.resolve(user);

        })

        return defered.promise;
      }
    };

  });
