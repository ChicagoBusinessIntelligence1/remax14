'use strict';

angular.module('app')
  .factory('DraftsService', function (notifications, $firebase, url, $q) {
    return {
      repoUrl: null,
      repoRef: null,
      all: function (userId) {
        this.repoUrl = url.brokers + userId + url.residentialSaleDrafts;
        this.repoRef = $firebase(new Firebase(this.repoUrl));

        return this.repoRef.$asArray();
      },
      remove: function (mls) {
        var defered = $q.defer();
        this.repoRef.$remove(mls).then(function () {
          toastr.warning(notifications.draftDeleted);
          defered.resolve(true);
        })
        return defered.promise;
      },
      moveToHomes: function (mls) {
        var draftRef = this.repoRef;

        var defered = $q.defer();
        var draft = draftRef.$asArray().$getRecord(mls);

        var sharedRepo = url.residentialSale+mls;
        var sharedRef = $firebase(new Firebase(sharedRepo)).$asObject();
        // create a property mls and set it to draft
        for (var i = 0; i < draft.length; i++) {
          var section = draft[i];
          sharedRef[i]=section;
        }
        sharedRef.$save().then(function () {

          draftRef.$remove(mls).then(function () {
            toastr.success(notifications.draftShared);
            defered.resolve(true);
          })
        })
        return defered.promise;
      }
    };
  });
