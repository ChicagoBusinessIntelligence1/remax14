'use strict';

angular.module('app')
  .factory('BrokerProfileService', function ($firebase, $q, $rootScope, BrokerHomesService, urlSale, urlRental) {
    return {
      repoUrl: null,
      repoRef: null,

      archiveListings: function () {
        var that = this;
        var deferred = $q.defer();

        //move residential to archieve
        BrokerHomesService.findBrokerHomes(urlSale,$rootScope.user.id).then(function (saleHomes) {
          for (var i = 0; i < saleHomes.length; i++) {
            var brokerHome = saleHomes[i];
            var brokerSection=_.last(brokerHome);
            for (var j = 0; j < brokerSection.length; j++) {
              var brokers = brokerSection[j];
              for (var k = 0; k < brokers.length; k++) {
                var broker = brokers[k];
                if (broker.id === $rootScope.user.id) {
                  brokers.$remove(broker);
                }
              }
            }
            var i=0;
          }
        })
        var test='breakPoint';

        //move drafts to archieve

        deferred.resolve(true);
        return deferred.promise; }
    };
  });
