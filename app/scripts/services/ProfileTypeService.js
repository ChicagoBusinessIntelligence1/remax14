'use strict';

angular.module('app')
  .factory('ProfileTypeService', function ($firebase, $q, urlCommon, $rootScope) {
    return {
      repoUrl: null,
      repoRef: null,

      determine: function (user) {
        var that = this;
        var defered = $q.defer();

        var id = user.id;

        that.repoUrl = urlCommon.brokers;
        that.repoRef = $firebase(new Firebase(that.repoUrl));
        var regBrokers = that.repoRef.$asArray();
        regBrokers.$loaded(function () {
          var profileType = 'customer',
              isAdmin = false;
          for (var i = 0; i < regBrokers.length; i++) {
            var broker = regBrokers[i];

            if (broker.$id === id) {
              profileType = 'broker';
              isAdmin = broker.profile.isAdmin;
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
