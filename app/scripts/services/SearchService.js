'use strict';

angular.module('app')
  .factory('SearchService', function ($firebase, $q, url, $rootScope) {
    return {
      repoUrl: null,
      repoRef: null,

      find: function () {
        var that = this;
        var defered = $q.defer();
        var query = $rootScope.query;

        that.repoUrl = url.residentialSale;
        var firebase = new Firebase(that.repoUrl);
        that.repoRef = $firebase(firebase);
        var allHomes = that.repoRef.$asArray();
        allHomes.$loaded(function () {
          if (_.isUndefined(query)) {
            defered.resolve(allHomes);
          } else {
            var queryArr = query.location.split(' ');
            var finalHomes = [];

            for (var i = 0; i < allHomes.length; i++) {
              var home = allHomes[i];
              var isHomeIncluded = true;
              for (var j = 0; j < home.length; j++) {
                var section = home[j];
                var sectionProps = section.content;
                var isLocationPass = false;
                var isPriceBedPass = false;

                for (var k = 0; k < sectionProps.length; k++) {
                  var property = sectionProps[k];

                  switch (property.title) {

                    case 'city':
                    case 'state':
                    case 'zip':
                      if (_.isUndefined(query.location)) {
                        break;
                      }
                      var propValueArr = property.value.split(' ');

	                    var foundQueryTerm = _.intersection(queryArr, propValueArr);
                      queryArr = _.without(queryArr,foundQueryTerm);

                      if (queryArr.length  > 0) {
                        if (!isLocationPass) {
                          isHomeIncluded = false;
                        }
                      } else {
                        isLocationPass = true;
                        if (!isPriceBedPass) {
                          isHomeIncluded = true;
                        }
                      }
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

                    case'bathrooms':
                      var houseBathrooms = parseInt(property.value);
                      var queryBathrooms = parseInt(query.bathrooms);
                      if ((houseBathrooms < queryBathrooms)) {
                        isHomeIncluded = false;
                      }
                      break;

                  }
                }

              }
              if (isHomeIncluded) {
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
