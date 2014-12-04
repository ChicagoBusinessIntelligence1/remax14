'use strict';

angular.module('app')
  .controller('SettingStatesFillCtrl', function (StatesService,urlCommon, $scope,$firebase) {
    var repo = urlCommon.residentialSettings + 'states';
    $scope.states = $firebase(new Firebase(repo));
    $scope.states.$set(StatesService.all()).then(function () {
      alert('added');
    })

  });

