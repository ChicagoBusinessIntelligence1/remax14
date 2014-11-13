'use strict';

angular.module('app')
  .factory('BrokerProfileService', function ($firebase, $q, $rootScope, CleanObjectService, BrokerHomesService, urlSale, urlRental, urlCommon) {
    return {
      repoUrl: null,
      repoRef: null,

      archiveBrokersFolder: function () {

        var deferred = $q.defer();
        var that = this;
        var id = $rootScope.user.id;
        var repo = urlCommon.brokers + id;

	      var repoRef = $firebase(new Firebase(repo));
        var brokerFolder = repoRef.$asObject();
        brokerFolder.$loaded(function () {
          brokerFolder = CleanObjectService.clean(brokerFolder);
          var trashRepo = urlCommon.archive;
          var trashRepoRef = $firebase(new Firebase(trashRepo));
          trashRepoRef.$set(id,brokerFolder).then(function () {
            repoRef.$remove().then(function () {
              toastr.info('Your profile has been removed.')
              deferred.resolve(true);
            });
          });
        })

        return deferred.promise;
      },
      archiveActiveListings: function () {
        var that = this;
        var deferred = $q.defer();
        var id = $rootScope.user.id;
        // remove from sales
        that.removeBroker(urlSale, id);
        // remove from rent
        that.removeBroker(urlRental, id);
        deferred.resolve(true);
        return deferred.promise;
      },
      removeBroker: function (url, id) {
        var that = this;
        that.repoUrl = url.residential;
        var saleHomes = $firebase(new Firebase(that.repoUrl)).$asArray();
        saleHomes.$loaded(function () {
          for (var i = 0; i < saleHomes.length; i++) {

            var saleHome = saleHomes[i];
            var saleHomeSection = _.last(saleHome);
            var brokers = saleHomeSection.content;
            if (_.isUndefined(brokers)) {
              continue;
            }
            for (var j = 0; j < brokers.length; j++) {
              var broker = brokers[j];
              if (broker.id === id) {
                brokers.splice(j, 1);
                saleHomes.$save(saleHome);

              }

            }
          }
          saleHomes.$save();
        })
      },
    };

  });
