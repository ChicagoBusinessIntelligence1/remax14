'use strict';

angular.module('app')
  .factory('ProfileTypeService', function ($firebase, $q, urlCommon, $rootScope) {
    return {
      repoUrl: null,
      repoRef: null,

      determine: function (user) {
        var that = this;
        var defered = $q.defer();

        var email = user.email;

        that.repoUrl = urlCommon.registeredBrokers;
        that.repoRef = $firebase(new Firebase(that.repoUrl));
        var regBrokers = that.repoRef.$asArray();
        regBrokers.$loaded(function () {
          var profileType = 'customer',
              isAdmin = false;
          for (var i = 0; i < regBrokers.length; i++) {
            var broker = regBrokers[i];
            if (broker.email === email) {
              profileType = 'broker';
              isAdmin = broker.isAdmin;
            }
          }
          user.profileType = profileType;
          user.isAdmin = isAdmin;
          defered.resolve(user);

        })

        return defered.promise;
      }
    };

  });
