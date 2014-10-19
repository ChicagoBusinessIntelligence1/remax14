'use strict';

angular.module('app')
  .factory('HomeRepo', function ($firebase, urlBrokers, urlResidential, urlResidentialTemp, $rootScope) {
    return {

      get: function (mls, isDraft) {
        var houseRepo;
        if (_.isUndefined(mls)) {
          houseRepo = urlResidentialTemp;

        } else {
          houseRepo = isDraft ? urlBrokers + $rootScope.user.id + '/residential/drafts/' + mls : urlResidential + mls;
        }
        console.log(houseRepo);
        return $firebase(new Firebase(houseRepo));
      }
    };
  })
;
