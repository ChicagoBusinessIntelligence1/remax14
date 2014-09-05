'use strict';

angular.module('app')
	.controller('HomeCtrl', function ($scope, url, $firebase) {

		var repo = url + 'posts';
		$scope.posts = $firebase(new Firebase(repo)).$asArray();
  });
