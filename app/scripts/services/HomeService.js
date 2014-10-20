'use strict';

angular.module('app')
  .factory('HomeService', function ($firebase, url, $rootScope) {
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
      }
    };
  });
