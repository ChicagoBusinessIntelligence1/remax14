'use strict';

angular.module('app')
  .controller('SettingStatesFillCtrl', function (StatesService,urlCommon, $scope,$firebase) {
    var repo = urlCommon.setting-states-fill-ctrl + 'posts';
    $scope.posts = $firebase(new Firebase(repo)).$asArray();

  });

