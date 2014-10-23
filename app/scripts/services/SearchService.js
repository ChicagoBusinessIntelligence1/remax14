'use strict';

angular.module('app')
  .factory('SearchService', function ($firebase, $q, url, $rootScope) {
    return {
      repoUrl: null,
      repoRef: null,

      find: function () {
        var that = this;
        var defered = $q.defer();
        var query = $rootScope.query;

        that.repoUrl = url.residential;
        that.repoRef = $firebase(new Firebase(that.repoUrl));
        var allHomes = that.repoRef.$asArray();
        var finalHomes = [];
        allHomes.$loaded(function () {
          for (var i = 0; i < allHomes.length; i++) {
            var home = allHomes[i];
          }
        })
        defered.resolve(that.repoRef.$asArray());

        return defered.promise;
      }
    };

  });
