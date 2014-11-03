'use strict';

angular.module('app')
  .factory('HomeService', function (notifications, CleanObjectService, HomePropertyService, $firebase, urlCommon, $rootScope, $q) {
    return {
      homeRef: null,
      homeRepo: null,
      url: null,
      getArrayFire: function (url, mls, isDraft) {
        this.url = url;
        if (_.isUndefined(mls)) {
          this.homeRepo = url.residentialTemplate;
        } else {
          this.homeRepo = isDraft ? urlCommon.brokers + $rootScope.user.id + url.residentialDrafts + mls : url.residential + mls;
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
        sectionRef.$set(section);
        //sectionRef.$save();
        //this.homeRef.$asObject().$set(section.$id,section);
      },

      saveToDrafts: function (home) {
        var defered = $q.defer();
        var mls = HomePropertyService.find(home, 'mls');
        var brokerDraftsRepo = urlCommon.brokers + $rootScope.user.id + this.url.residentialDrafts + mls;
        var brokers = $firebase(new Firebase(brokerDraftsRepo));

        home = CleanObjectService.clean(home);
        brokers.$set(home).then(function () {
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
