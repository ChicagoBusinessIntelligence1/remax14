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

        var defered = $q.defer();
        var id = section.$id;
        var images = angular.copy(section.content);
        section = CleanObjectService.clean(section);
        section.content = images;
        this.homeRef.$update(id, section).then(function () {
          defered.resolve(true);
        });
        return defered.promise;
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
      },
      findSection: function (home, sectionTitle) {
        for (var i = 0; i < home.length; i++) {
          var section = home[i];
          if (section.title === sectionTitle) {
            return section;
          }
        }
      },

      subVal: function (section, title) {
        for (var i = 0; i < section.length; i++) {
          var prop = section[i];
          if (prop.title === title) {
            return prop.value;
          }
        }
      },
      getSectionContent: function (home, sectionTitle) {
        for (var i = 0; i < home.length; i++) {
          var section = home[i];
          if (section.title === sectionTitle) {
            if (section.content && _.isArray(section.content)) {
              return section.content;
            } else {
              return null;
            }
          }
        }
        return null;

      },
      isEditable: function (home, brokerId) {
        var that = this;

        if (_.isUndefined(brokerId)) {
          return false;
        }
        var brokers = this.findSection(home, 'brokers');
        if (!brokers) {
          return false;
        }
        if (_.isUndefined(brokers.content) || !_.isArray(brokers.content)) {
          return false;
        }
        for (var i = 0; i < brokers.content.length; i++) {
          var broker = brokers.content[i];
          if (broker.id === brokerId) {
            return true;
          }
        }
        return false;
      }

    };
  })
;
