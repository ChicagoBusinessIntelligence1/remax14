'use strict';

angular.module('app')
  .factory('HousesFrontImagesService', function ($firebase, $q, $rootScope, urlSale, HomeService) {
    return {
      repoUrl: null,
      repoRef: null,

      all: function () {
        var that = this;
        var deferred = $q.defer();
        var homesShort = [];

        that.repoUrl = urlSale.residential;
        that.repoRef = $firebase(new Firebase(that.repoUrl));

        that.repoRef.$asArray().$loaded(function (homes) {
          for (var i = 0; i < homes.length; i++) {
            var home = homes[i];
            var generalInfo = HomeService.getSectionContent(home, 'generalInformation');
            var bedrooms = HomeService.getSectionContent(home, 'bedrooms');
            var fullBathrooms = HomeService.getSectionContent(home, 'bathrooms');
            var city = HomeService.subVal(generalInfo, 'city');
            var state = HomeService.subVal(generalInfo, 'state');
            var zip = HomeService.subVal(generalInfo, 'zip');
            var price = HomeService.subVal(generalInfo, 'price');
            var status = HomeService.subVal(generalInfo, 'propertyStatus');
            var propertySize = HomeService.subVal(generalInfo, 'propertySize');
            var bedrooms = HomeService.subVal(bedrooms, 'bedrooms');
            var fullBathrooms = HomeService.subVal(fullBathrooms, 'fullBathrooms');
            var images = HomeService.getSectionContent(home, 'images');
            var frontImage = _.first(images);
            if (frontImage) {
              var homeInfo = {
                status: status,
                propertySize: propertySize,
                city: city,
                state: state,
                zip: zip,
                price: price,
                bedrooms: bedrooms,
                fullBathrooms: fullBathrooms,
                image: frontImage
              };
              homesShort.push(homeInfo);
            }
          }
          deferred.resolve(homesShort);
        })
        return deferred.promise;
      },

      get: function (id) {
        var that = this;
        var deferred = $q.defer();

        that.repoUrl = urlSale.residential;
        that.repoRef = $firebase(new Firebase(that.repoUrl));

        deferred.resolve(that.repoRef.$asObject()[id]);
        return deferred.promise;
      },

      add: function (element) {
        var that = this;
        var deferred = $q.defer();

        that.repoUrl = urlSale.residential;
        that.repoRef = $firebase(new Firebase(that.repoUrl));
        that.repoRef.$add(element).then(function () {
          deferred.resolve(true);
        })
        deferred.resolve(that.repoRef.$asArray());
        return deferred.promise;
      },

      remove: function (id) {
        var that = this;
        var deferred = $q.defer();

        that.repoRef = $firebase(new Firebase(that.repoUrl));

        that.repoRef.$remove(id).then(function () {
          deferred.resolve(true);

        })
        return deferred.promise;
      }
    };
  });
