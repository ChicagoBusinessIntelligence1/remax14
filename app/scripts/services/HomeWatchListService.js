'use strict';

angular.module('app')
  .factory('HomeWatchListService', function ($firebase, $q, $rootScope, urlSale, urlRental) {
    return {
      repoUrl: null,
      repoRef: null,

      getSales: function () {
        var that = this;
        var deferred = $q.defer();

        var watchListMlses = $rootScope.user.watchList.sale;
        var homesInWatchList = [];
        that.repoUrl = urlSale.residential;
        that.repoRef = $firebase(new Firebase(that.repoUrl));

        var allHomes = that.repoRef.$asArray();
        allHomes.$loaded(function () {
          for (var i = 0; i < allHomes.length; i++) {
            var home = allHomes[i];
            var mls = home.$id;
            if (watchListMlses.indexOf(mls) > -1) {
              homesInWatchList.push(home);
            }
          }
          deferred.resolve(homesInWatchList);
        })

        return deferred.promise;
      },
      getRent: function () {
        var that = this;
        var deferred = $q.defer();

        var watchListMlses = $rootScope.user.watchList.rent;
        var homesInWatchList = [];
        var repoUrl = urlRental.residential;
        that.repoRef = $firebase(new Firebase(repoUrl));

        var allHomes = that.repoRef.$asArray();
        allHomes.$loaded(function () {
          for (var i = 0; i < allHomes.length; i++) {
            var home = allHomes[i];
            var mls = home.$id;
            if (watchListMlses.indexOf(mls) > -1) {
              homesInWatchList.push(home);
            }
          }
          deferred.resolve(homesInWatchList);
        })
        return deferred.promise;
      }
    };
  });
