'use strict';

angular.module('app')
  .factory('TypeHomesService', function ($firebase, $q) {
    return {
      repoUrl: null,
      repoRef: null,

      getCondos: function () {
        var that = this;
        var defered = $q.defer();

        that.repoUrl = 'https://remax14.firebaseio.com/residential/sale/homes';
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
        });
          defered.resolve(condos);
        return defered.promise;
      },
      getSingleFamily: function () {
        var that = this;
        var defered = $q.defer();

        that.repoUrl = 'https://remax14.firebaseio.com/residential/sale/homes';
        that.repoRef = $firebase(new Firebase(that.repoUrl));
        var allHomes = that.repoRef.$asArray();
        var condos = [];

        allHomes.$loaded(function () {
          for (var i = 0; i < allHomes.length; i++) {
            var home = allHomes[i];
            if (home[0].type === 'Single Family House') {
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

        that.repoUrl = 'https://remax14.firebaseio.com/residential/sale/homes';
        that.repoRef = $firebase(new Firebase(that.repoUrl));
        var allHomes = that.repoRef.$asArray();

        allHomes.$loaded(function () {
          defered.resolve(allHomes);
        })
        return defered.promise;
      }
    };

  });
