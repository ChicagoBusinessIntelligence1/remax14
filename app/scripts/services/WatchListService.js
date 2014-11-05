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
        var defered = $q.defer();

        var watchlists={};

        var repoUrl = mainUrl + $rootScope.user.profileType + "s/" + $rootScope.user.id + '/watchList/';
        that.repoUrlSale = repoUrl+'sale';
        that.repoUrlRent = repoUrl+'rent';


        that.repoRefSale = $firebase(new Firebase(that.repoUrSale));
        that.repoRefRent = $firebase(new Firebase(that.repoUrlRent));

        var watchListSale = that.repoRefSale.$asArray();
        watchListSale.$loaded(function () {

        });
          defered.resolve(watchList);

        return defered.promise;
      },
      addHome: function (mls) {
        var that = this;
        var defered = $q.defer();

        that.repoRef.$asArray().$add(mls).then(function () {
          try {
            $rootScope.user.watchList.push(mls);
            toastr.success(notifications.savedToWatchlist);
            defered.resolve(true);
          } catch (e) {
            toastr.error('Error' + e.message);
            defered.reject(e);
          }
        });
        return defered.promise;
      },
      removeHome: function (mls) {
        var that = this;
        var defered = $q.defer();

        var fireIndex = $rootScope.user.watchList.indexOf(mls);

        that.repoRef.$asArray().$remove(fireIndex).then(function () {
          try {
            $rootScope.user.watchList.slice(fireIndex, 1);
            toastr.success(notifications.savedToWatchlist);
            defered.resolve(true);
          } catch (e) {
            toastr.error('Error' + e.message);
            defered.reject(e);
          }
        });
        return defered.promise;
      }
    };
  });
