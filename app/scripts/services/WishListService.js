'use strict';

angular.module('app')
  .factory('WishListService', function ($firebase, $q, $rootScope, urlCommon) {
    return {
      repoUrl: null,
      repoRef: null,

      all: function (url) {
        var that = this;
        var deferred = $q.defer();

        var userType = $rootScope.user.profileType;
        that.repoUrl = urlCommon[userType + 's'] +'/'+ $rootScope.user.id + '/' + url.residentialWishList;
        that.repoRef = $firebase(new Firebase(that.repoUrl));

        deferred.resolve(that.repoRef.$asArray());
        return deferred.promise;
      },
      save: function (url, wishList) {
        var that = this;
        var deferred = $q.defer();



        that.repoRef.$asArray().$add(wishList).then(function () {
          deferred.resolve(true);
          toastr.success('Wish list has been updated');
        });
        return deferred.promise;
      }

    };

  });
