'use strict';

angular.module('app')
  .factory('WatchListService', function ($firebase, $q, mainUrl, $rootScope) {
    return {
      repoUrl: null,
      repoRef: null,

      getList: function () {
        var that = this;
        this.repoUrl = mainUrl + $rootScope.user.profileType + "s/" + $rootScope.user.id + '/watchList/';
        var defered = $q.defer();

        that.repoRef = $firebase(new Firebase(that.repoUrl));

        var watchList = that.repoRef.$asArray();

        watchList.$loaded(function () {

          defered.resolve(watchList);
        });

        return defered.promise;
      },
      addHome: function (mls) {
        var that = this;
        this.repoUrl = mainUrl + $rootScope.user.profileType + "s/" + $rootScope.user.id + '/watchList/';
        var defered = $q.defer();

        that.repoRef = $firebase(new Firebase(that.repoUrl));

        that.repoRef.$asArray().$add(mls).then(function () {
          //  success
          defered.resolve(true);
        });
        return defered.promise;
      }
    };
  });
