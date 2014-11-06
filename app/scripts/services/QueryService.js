'use strict';

angular.module('app')
  .factory('QueryService', function ($firebase, $q) {
        return {
          repoUrl: null,
          repoRef: null,

          all: function () {
            var that = this;
            var deferred = $q.defer();

            that.repoUrl = url.residential;
            that.repoRef = $firebase(new Firebase(that.repoUrl));

            deferred.resolve(that.repoRef.$asArray());
            return deferred.promise;
          }
        };

  });
