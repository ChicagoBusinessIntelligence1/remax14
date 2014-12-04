'use strict';

angular.module('app')
  .factory('WatchListService', function ($firebase, $q, mainUrl, $rootScope, notifications) {
    return {
      repoUrlSale: null,
      repoRefSale: null,
      repoUrlRent: null,
      repoRefRent: null,

      getSaleRentLists: function () {
        var that = this;
        var deferred = $q.defer();

        var watchList = {};

        var repoUrl = mainUrl + $rootScope.user.profileType + "s/" + $rootScope.user.id + '/watchList/';
        that.repoUrlSale = repoUrl + 'sale';
        that.repoUrlRent = repoUrl + 'rent';

        that.repoRefSale = $firebase(new Firebase(that.repoUrlSale));
        that.repoRefRent = $firebase(new Firebase(that.repoUrlRent));

        var watchListSale = that.repoRefSale.$asArray();
        var watchListRent = that.repoRefRent.$asArray();

        watchListSale.$loaded(function () {
          watchList.sale = _.pluck(watchListSale, '$value');
          watchListRent.$loaded(function () {
            watchList.rent = _.pluck(watchListRent, '$value');
            deferred.resolve(watchList);
          });
        });

        return deferred.promise;
      },
      addHome: function (isRent, mls) {
        var saleRent = isRent ? 'rent' : 'sale';
        var that = this;
        var deferred = $q.defer();
        var repoRef = isRent ? that.repoRefRent : that.repoRefSale;

        repoRef.$asArray().$add(mls).then(function () {
          try {
            $rootScope.user.watchList[saleRent].push(mls);

            toastr.success(notifications.savedToWatchlist);
            deferred.resolve(true);
          } catch (e) {
            toastr.error('Error' + e.message);
            deferred.reject(e);
          }
        });
        return deferred.promise;
      },
      removeHome: function (isRent, mls) {
        var that = this;
        var saleRent = isRent ? 'rent' : 'sale';
        var repoRef = isRent ? that.repoRefRent : that.repoRefSale;
        var deferred = $q.defer();

        var watchList = $rootScope.user.watchList[saleRent];
        var fireIndex = watchList.indexOf(mls);

        repoRef.$asArray().$remove(fireIndex).then(function () {
          try {
            $rootScope.user.watchList[saleRent] = _.without(watchList, mls);
            toastr.success(notifications.savedToWatchlist);
            deferred.resolve(true);
          } catch (e) {
            toastr.error('Error' + e.message);
            deferred.reject(e);
          }
        });
        return deferred.promise;
      }
    };
  });
