'use strict';

angular.module('app')
  .factory('TypeHomesService', function ($firebase, $q, url) {
    return {
      repoUrl: null,
      repoRef: null,

      getCondos: function () {
        var that = this;
        var defered = $q.defer();

        that.repoUrl = url.residentialSale;
        that.repoRef = $firebase(new Firebase(that.repoUrl));
        var allHomes = that.repoRef.$asArray();
        var condos = [];

        allHomes.$loaded(function () {
          for (var i = 0; i < allHomes.length; i++) {
            var home = allHomes[i];
            if (home[0].type === 'Condo') {
              condos.push(home);
            }
          }
          defered.resolve(condos);

        })
        return defered.promise;
      },
      getAllForSale: function () {
        var that = this;
        var defered = $q.defer();

        that.repoUrl = url.residentialSale;
        that.repoRef = $firebase(new Firebase(that.repoUrl));
        var allHomes = that.repoRef.$asArray();

        allHomes.$loaded(function () {
          defered.resolve(allHomes);
        })
        return defered.promise;
      }
    };

  });
