'use strict';

angular.module('app')
  .factory('HomeWatchListService', function ($firebase, $q,$rootScope, urlSale,urlRent) {
        return {
          repoUrl: null,
          repoRef: null,

          getSales: function () {
            var that = this;
            var deferred = $q.defer();

            var watchListMlses = $rootScope.user.watchList.sale;

            that.repoUrl = urlSale.residential;
            that.repoRef = $firebase(new Firebase(that.repoUrl));

            var allHomes = that.repoRef.$asArray();


            deferred.resolve(that.repoRef.$asArray());
            return deferred.promise;
          }
        };

  });
