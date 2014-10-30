'use strict';

angular.module('app')
  .factory('SettingsService', function ($firebase, $q, url) {
        return {
          repoUrl: null,
          repoRef: null,

          getOptions: function (optionsName) {
            var that = this;
            var defered = $q.defer();

            that.repoUrl = url.settingsResidential+optionsName+'s';
            that.repoRef = $firebase(new Firebase(that.repoUrl));

            defered.resolve(that.repoRef.$asArray());
            return defered.promise;
          }
        };

  });
