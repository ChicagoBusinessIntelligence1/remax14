'use strict';

angular.module('app')
  .factory('AddSearchFeaturesService', function ($firebase, $q, url) {
        return {
          repoUrl: null,
          repoRef: null,

          all: function () {
            var that = this;
            var defered = $q.defer();

            that.repoUrl = url.residential;
            that.repoRef = $firebase(new Firebase(that.repoUrl));

            defered.resolve(that.repoRef.$asArray());
            return defered.promise;
          }
        };

  });
