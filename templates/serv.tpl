'use strict';

angular.module('app')
  .factory('#name#Service', function ($firebase, $q, url) {
    return {
      repoUrl:null,
      repoRef:null,

      get: function () {
      var that = this;
      var defered = $q.defer();
      this.repoUrl=url.;
      this.repoRef = $firebase(new Firebase(this.repoUrl));
       defered.resolve();
      return defered.promise;
      }
    };
  });
