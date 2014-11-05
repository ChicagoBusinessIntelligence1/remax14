'use strict';

angular.module('app')
  .factory('WatchListService', function ($firebase, $q, mainUrl, $rootScope) {
    return {
      repoUrl: null,
      repoRef: null,

      addHome: function (mls) {
        this.repoUrl = mainUrl + $rootScope.user.profileType + "s/" +$rootScope.user.id+ '/watchList/';
        console.log(customerFolder);
        var that = this;
        var defered = $q.defer();

        that.repoRef = $firebase(new Firebase(that.repoUrl));

        defered.resolve(that.repoRef.$asArray());
        return defered.promise;
      }
    };

  });
