'use strict';

angular.module('app')
  .controller('ListingSharedCtrl', function ($scope, $rootscope, urlResidential) {
    var userId = $rootscope.user.id;

    var repo = urlResidential;
    var listings = $firebase(new Firebase(repo)).$asArray();

  });
