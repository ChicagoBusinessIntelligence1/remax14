'use strict';

angular.module('app')
  .factory('BrokerApplicationService', function ($firebase, $q, $rootScope, urlCommon) {
    return {
      repoUrl: null,
      repoRef: null,

      all: function () {
        var that = this;
        var deferred = $q.defer();

        that.repoUrl = urlCommon.brokerApplications;
        that.repoRef = $firebase(new Firebase(that.repoUrl));

        deferred.resolve(that.repoRef.$asArray());
        return deferred.promise;
      },
      apply: function (user) {
        var that = this;
        var deferred = $q.defer();

        that.repoUrl = urlCommon.brokerApplications;
        that.repoRef = $firebase(new Firebase(that.repoUrl));

        var array = that.repoRef.$asArray().$add(user).then(function () {
          deferred.resolve(true);
        });
        return deferred.promise;
      },
      approve: function (email,id) {
        var that = this;
        var deferred = $q.defer();

        that.repoUrl = urlCommon.brokerApplications;
        that.repoRef = $firebase(new Firebase(that.repoUrl));

        var array = that.repoRef.$asArray().$add(user).then(function () {
          deferred.resolve(true);
        });
        return deferred.promise;
      }

    };

  });
