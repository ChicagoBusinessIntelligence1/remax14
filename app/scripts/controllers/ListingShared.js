'use strict';

angular.module('app')
  .controller('ListingSharedCtrl', function ($scope, $firebase, $rootScope, urlResidential) {
    var userId = $rootScope.user.id;

    var repo = urlResidential;
    var listings = $firebase(new Firebase(repo)).$asArray();

    listings.$loaded(function () {
      $scope.listings = _.filter(listings, function (elem) {
        return _.find(elem.brokers, function (el) {
          return el.id === userId;
        })
      })
    })
  });
