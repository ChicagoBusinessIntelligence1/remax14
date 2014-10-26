'use strict';

angular.module('app')
  .factory('HomesService', function ($firebase, url, $q) {
    return {
      repoUrl: null,
      repoRef: null,
      findBrokerHomes: function (userId) {
        var defer = $q.defer();

        this.repoUrl = url.residential;
        this.repoRef = $firebase(new Firebase(this.repoUrl));
        var allHomes = this.repoRef.$asArray();
        var brokerHomes = [];

        allHomes.$loaded(function () {
          allHomes.forEach(function (home) {
            var homeBrokers = _.where(home, {title: 'brokers'});
            var allBrokers = homeBrokers[0].content;

            for (var i = 0; i < allBrokers.length; i++) {
              var broker = allBrokers[i];
              if (broker.id === userId) {
                brokerHomes.push(home);
                break;
              }
            }
          });
          defer.resolve(brokerHomes);
        })
        return defer.promise;
      }
    };
  });
