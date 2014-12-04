'use strict';

angular.module('app')
  .factory('BrokerApplicationService', function ($firebase, $q, $rootScope, urlCommon, CleanObjectService) {
    return {
      repoUrl: null,
      repoRef: null,

      all: function () {
        var that = this;
        var deferred = $q.defer();

        that.repoUrl = urlCommon.brokerApplications;
        that.repoRef = $firebase(new Firebase(that.repoUrl));

        deferred.resolve(that.repoRef.$asArray());
        return deferred.promise;
      },
      apply: function (user) {
        var that = this;
        var deferred = $q.defer();

        that.repoUrl = urlCommon.brokerApplications;
        that.repoRef = $firebase(new Firebase(that.repoUrl));


        var array = that.repoRef.$asArray().$add(user).then(function () {
          deferred.resolve(true);
        });
        return deferred.promise;
      },
      approve: function (applicant) {
        var that = this;
        var deferred = $q.defer();

        that.repoRef = $firebase(new Firebase(that.repoUrl));

        var urlRegBrokers = urlCommon.brokers;
        var refRegBrokers = $firebase(new Firebase(urlRegBrokers));
        var dbId = applicant.$id;
        applicant = CleanObjectService.clean(applicant);

        applicant = _.extend(applicant, {
            isAdmin: false
          }
        )
        var fbId = applicant.id;
        var brokerProfile = {
          profile:applicant
        };
        refRegBrokers.$set(fbId, brokerProfile).then(function () {
          that.repoRef.$remove(dbId);
          deferred.resolve(true);
        })

        //var email = that.repoRef.$asObject()[id];

        return deferred.promise;
      },
      reject: function (applicant) {
        var that = this;
        var deferred = $q.defer();

        that.repoRef = $firebase(new Firebase(that.repoUrl));

        that.repoRef.$remove(applicant.$id).then(function () {
          deferred.resolve(true);
        })

        return deferred.promise;
      }

    }
      ;

  })
;
