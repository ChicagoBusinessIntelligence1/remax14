'use strict';

angular.module('app')
  .factory('QueryService', function ($firebase, $q, $rootScope, mainUrl) {
    return {
      repoUrl: null,
      repoRef: null,

      save: function (query) {

        var repoUrl = mainUrl + $rootScope.user.profileType + "s/" + $rootScope.user.id + '/queries/';
        var that = this;
        var deferred = $q.defer();

        that.repoUrl = repoUrl;
        that.repoRef = $firebase(new Firebase(that.repoUrl));
        that.repoRef.$asArray().$add(query).then(function () {
          deferred.resolve(true);
        })
        return deferred.promise;
      },
      all: function () {

        var repoUrl = mainUrl + $rootScope.user.profileType + "s/" + $rootScope.user.id + '/queries/';
        var that = this;
        var deferred = $q.defer();

        that.repoRef = $firebase(new Firebase(repoUrl));
        that.repoRef.$asArray().$loaded(function (queries) {
          deferred.resolve(queries);
        })
        return deferred.promise;
      },
      process: function (query) {
        query.date = Date.now();
        return query;
      }
    };

  })
;
