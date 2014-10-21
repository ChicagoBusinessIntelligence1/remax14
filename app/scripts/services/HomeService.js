'use strict';

angular.module('app')
  .factory('HomeService', function (notifications, MlsService, $firebase, url, $rootScope, $q) {
    return {
      homeRef: null,
      getArrayFire: function (mls, isDraft) {
        var homeRepo;
        if (_.isUndefined(mls)) {
          homeRepo = url.residentialTemplate;
        } else {
          homeRepo = isDraft ? url.brokers + $rootScope.user.id + '/residential/drafts/' + mls : url.residential + mls;
        }
        this.homeRef = $firebase(new Firebase(homeRepo));

        return this.homeRef.$asArray();
      },
      moveToTrash: function () {
        this.homeRef.$remove();
      },

      saveToDrafts: function (home) {
        var defered = $q.defer();

        var mls = MlsService.find(home);

        var brokerDraftsRepo = url.brokers + $rootScope.user.id + '/residential/drafts/' + mls;
        var brokers = $firebase(new Firebase(brokerDraftsRepo)).$asObject();

        for (var i = 0; i < home.length; i++) {
          var section = home[i];
          brokers[section.$id] = section;
        }
        brokers.$save().then(function () {
            // success
            defered.resolve(true);
            toastr.success(notifications.draftSaved);
          },
          function (error) {
            //  error
            toastr.error(error);
            defered.reject(error)
          }
        );
        return defered.promise;
      },
      firebaseClean: function (home) {
        for (var i = 0; i < home.length; i++) {
          home[i] = _.omit(home, ['$id', '$priority', '$$hashKey']);
        }
        return home;
      }

    };
  });
