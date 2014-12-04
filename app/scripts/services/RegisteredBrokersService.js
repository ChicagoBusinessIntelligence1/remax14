'use strict';

angular.module('app')
  .factory('RegisteredBrokersService', function ($firebase, $q, $rootScope, urlCommon) {
    return {
      repoUrl: null,
      repoRef: null,

      all: function () {
        var that = this;
        var deferred = $q.defer();

        that.repoUrl = urlCommon.brokers;
        that.repoRef = $firebase(new Firebase(that.repoUrl));

        that.repoRef.$asArray().$loaded(function (all) {
        deferred.resolve(all);
        })
        return deferred.promise;
      },

      get: function (id) {
        var that = this;
        var deferred = $q.defer();

        that.repoUrl = urlCommon.registeredBrokers;
        that.repoRef = $firebase(new Firebase(that.repoUrl));

        deferred.resolve(that.repoRef.$asObject()[id]);
        return deferred.promise;
      },

      add: function (element) {
        var that = this;
        var deferred = $q.defer();

        that.repoUrl = urlCommon.registeredBrokers;
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
