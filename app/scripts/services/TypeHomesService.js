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
          defered.resolve(condos);
        });
        return defered.promise;
      },
      getRentalHouses: function () {
        var that = this;
        var defered = $q.defer();

        that.repoUrl = 'https://remax14.firebaseio.com/residential/rental/homes';
        that.repoRef = $firebase(new Firebase(that.repoUrl));
        var allHomes = that.repoRef.$asArray();
        var houses = [];

        allHomes.$loaded(function () {
          for (var i = 0; i < allHomes.length; i++) {
            var home = allHomes[i];
            if (home[0].type === 'House') {
              houses.push(home);
            }
          }
          defered.resolve(houses);
        });
        return defered.promise;
      },
      getRentalApartments: function () {
        var that = this;
        var defered = $q.defer();

        that.repoUrl = 'https://remax14.firebaseio.com/residential/rental/homes';
        that.repoRef = $firebase(new Firebase(that.repoUrl));
        var allHomes = that.repoRef.$asArray();
        var apartments = [];

        allHomes.$loaded(function () {
          for (var i = 0; i < allHomes.length; i++) {
            var home = allHomes[i];
            if (home[0].type === 'Apartment') {
              apartments.push(home);
            }
          }
          defered.resolve(apartments);
        });
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
            if (home[0].type === 'Single Family Home') {
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
      },
      getAllForRent: function () {
        var that = this;
        var defered = $q.defer();

        that.repoUrl = 'https://remax14.firebaseio.com/residential/rental/homes';
        that.repoRef = $firebase(new Firebase(that.repoUrl));
        var allHomes = that.repoRef.$asArray();

        allHomes.$loaded(function () {
          defered.resolve(allHomes);
        })
        return defered.promise;
      }
    };

  });
