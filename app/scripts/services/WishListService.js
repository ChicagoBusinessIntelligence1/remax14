'use strict';

angular.module('app')
  .factory('WishListService', function ($firebase, $q, $rootScope, urlCommon, CleanObjectService, notifications) {
    return {
      repoUrl: null,
      repoRef: null,

      all: function (url) {
        var that = this;
        var deferred = $q.defer();

        var userType = $rootScope.user.profileType;
        that.repoUrl = urlCommon[userType + 's'] + '/' + $rootScope.user.id + '/' + url.residentialWishList;
        that.repoRef = $firebase(new Firebase(that.repoUrl));

        deferred.resolve(that.repoRef.$asArray());
        return deferred.promise;
      },
      save: function (wishList) {
        var that = this;
        var deferred = $q.defer();
        that.repoRef.$asArray().$add(wishList).then(function () {
          deferred.resolve(true);
          toastr.success(notifications.wishListUpdated);
        });
        return deferred.promise;
      },
      update: function (wishList) {
        var that = this;
        var deferred = $q.defer();

        var id = wishList.$id;
        wishList = CleanObjectService.clean(wishList);
        that.repoRef.$update(id, wishList).then(function () {
          deferred.resolve(true);
          toastr.success(notifications.changesSaved);
        });
        return deferred.promise;
      },

      remove: function (key) {
        var that = this;
        var deferred = $q.defer();

        that.repoRef.$remove(key).then(function () {
          deferred.resolve(true);
          toastr.success(notifications.wishListUpdated);
        });
        return deferred.promise;
      }
    };
  });
