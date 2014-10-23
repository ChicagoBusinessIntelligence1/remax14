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

        that.repoUrl = url.residential;
        that.repoRef = $firebase(new Firebase(that.repoUrl));
        var allHomes = that.repoRef.$asArray();
        if (_.isUndefined(query)) {
          defered.resolve(that.repoRef.$asArray());
        } else {
          var finalHomes = [];
          allHomes.$loaded(function () {

            for (var i = 0; i < allHomes.length; i++) {
              var home = allHomes[i];
              var isHomeIncluded = true;
              for (var j = 0; j < home.length; j++) {
                var section = home[j];
                var sectionProps = section.content;
                for (var k = 0; k < sectionProps.length; k++) {
                  var property = sectionProps[k];

                  switch (property.title) {
                    case 'city':
                    case 'state':
                    case 'zip':/
                      if (property.value.indexOf(query.location) === -1) {
                        isHomeIncluded = false;
                      }
                      break;

                    case'price':
                      var housePrice = parseInt(property.value);
                      var maxPrice = parseInt(query.priceMax);
                      var minPrice = parseInt(query.priceMin);
                      if (housePrice < maxPrice || housePrice >= minPrice) {
                        isHomeIncluded = false;
                      }
                      break;

                  }
                }

              }
            }

            defered.resolve(finalHomes);
          });
        }

        return defered.promise;
      }
    };

  });
