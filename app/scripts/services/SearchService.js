'use strict';

angular.module('app')
  .factory('SearchService', function ($firebase, $q, $rootScope) {
    return {
      repoUrl: null,
      repoRef: null,

      find: function (url) {
        var that = this;
        var defered = $q.defer();
        var query = $rootScope.query;
        that.repoUrl = url.residential;
        var firebase = new Firebase(that.repoUrl);
        that.repoRef = $firebase(firebase);
        var allHomes = that.repoRef.$asArray();
        allHomes.$loaded(function () {
          if (_.isUndefined(query)) {
            defered.resolve(allHomes);
          } else {
            var finalHomes = [];

            for (var i = 0; i < allHomes.length; i++) {
              var home = allHomes[i];
              var isHomeIncluded = true;
              if (!_.isUndefined(query.location) && !_.isEmpty(query.location)) {
                var queryLocationArr = _.map(query.location.split(' '), function (el) {
                  return el.trim().toLowerCase()
                });
              } else {
                var queryLocationArr = [];

              }
              for (var j = 0; j < home.length; j++) {

                var section = home[j];
                var sectionProps = section.content;
                var isLocationPass = false;
                var isPriceBedPass = false;
                if (_.isUndefined(sectionProps)) {
                  continue;
                }
                for (var k = 0; k < sectionProps.length; k++) {
                  var property = sectionProps[k];

                  if (_.isUndefined(property)) {
                    continue;
                  }
                  switch (property.title) {

                    case 'city':
                    case 'mls':
                    case 'state':
                    case 'zip':
                      if (_.isUndefined(query.location)) {
                        break;
                      }

                        var propValueArr = _.map(property.value.toString().split(' '), function (el) {
                          return el.trim().toLowerCase()
                        });

                      var foundQueryTerm = _.intersection(queryLocationArr, propValueArr);
                      queryLocationArr = _.without(queryLocationArr, foundQueryTerm[0]);

                      break;

                    case'price':
                      var housePrice = parseInt(property.value);
                      var maxPrice = parseInt(query.priceMax);
                      var minPrice = parseInt(query.priceMin);
                      if (housePrice > maxPrice || housePrice < minPrice) {
                        isHomeIncluded = false;
                        isPriceBedPass = true;
                      }
                      break;

                    case'bedrooms':
                      var houseBedrooms = parseInt(property.value);
                      var queryBedrooms = parseInt(query.bedrooms);
                      if ((houseBedrooms < queryBedrooms)) {
                        isHomeIncluded = false;
                        isPriceBedPass = true;
                      }
                      break;

                    case'fullBathrooms':
                      var houseBathrooms = parseInt(property.value);
                      var queryBathrooms = parseInt(query.bathrooms);
                      if ((houseBathrooms < queryBathrooms)) {
                        isHomeIncluded = false;
                      }
                      break;

                  }
                }

              }
              if (isHomeIncluded && queryLocationArr.length === 0) {
                finalHomes.push(home);
              }
            }

            defered.resolve(finalHomes);
          }
        });

        return defered.promise;
      }
    };

  });
