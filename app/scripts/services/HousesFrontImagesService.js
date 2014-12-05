'use strict';

angular.module('app')
  .factory('HousesFrontImagesService', function ($firebase, $q, $rootScope, urlSale, HomeService) {
    return {
      repoUrl: null,
      repoRef: null,

      all: function () {
        var that = this;
        var deferred = $q.defer();
        var images = [];

        that.repoUrl = urlSale.residential;
        that.repoRef = $firebase(new Firebase(that.repoUrl));

        that.repoRef.$asArray().$loaded(function (homes) {
          for (var i = 0; i < homes.length; i++) {
            var home = homes[i];
            var images = HomeService.getSectionContent(home,'images');
            var frontImage = _.first(images);
            if (frontImage) {
              images.push(frontImage);
            }

          }
          deferred.resolve(images);
        })
        return deferred.promise;
      },

      get: function (id) {
        var that = this;
        var deferred = $q.defer();

        that.repoUrl = urlSale.residential;
        that.repoRef = $firebase(new Firebase(that.repoUrl));

        deferred.resolve(that.repoRef.$asObject()[id]);
        return deferred.promise;
      },

      add: function (element) {
        var that = this;
        var deferred = $q.defer();

        that.repoUrl = urlSale.residential;
        that.repoRef = $firebase(new Firebase(that.repoUrl));
        that.repoRef.$add(element).then(function () {
          deferred.resolve(true);
        })
        deferred.resolve(that.repoRef.$asArray());
        return deferred.promise;
      },

      remove: function (id) {
        var that = this;
        var deferred = $q.defer();

        that.repoRef = $firebase(new Firebase(that.repoUrl));

        that.repoRef.$remove(id).then(function () {
          deferred.resolve(true);

        })
        return deferred.promise;
      }
    };
  });
