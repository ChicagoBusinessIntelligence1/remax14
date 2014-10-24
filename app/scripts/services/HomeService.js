'use strict';

angular.module('app')
  .factory('HomeService', function (MyServiceService, notifications, CleanObjectService, MlsService, $firebase, url, $rootScope, $q) {
    return {
      homeRef: null,
      homeRepo: null,
      getArrayFire: function (mls, isDraft) {
        if (_.isUndefined(mls)) {
          this.homeRepo = url.residentialTemplate;
        } else {
          this.homeRepo = isDraft ? url.brokers + $rootScope.user.id + '/residential/drafts/' + mls : url.residential + mls;
        }
        this.homeRef = $firebase(new Firebase(this.homeRepo));

        return this.homeRef.$asArray();
      },
      moveToTrash: function () {
        this.homeRef.$remove();
      },
      updateHomeSection: function (section) {
        var id = section.$id;
        section = CleanObjectService.clean(section);
        var sectionRepo = this.homeRepo + '/' + id;
        var sectionRef = $firebase(new Firebase(sectionRepo));
        //var refObj = this.homeRef.$asObject();
        sectionRef.$update(section);
        //sectionRef.$save();
        //this.homeRef.$asObject().$set(section.$id,section);
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
      }

    };
  });
