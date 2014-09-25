'use strict';

angular.module('app')
  .controller('GenerateCtrl', function ($scope, url, $firebase) {
    var repoHouses = url + 'houses';
    $scope.housesObj = $firebase(new Firebase(repoHouses));
    $scope.housesObj.$remove();
    $scope.houses = $firebase(new Firebase(repoHouses)).$asArray();

    var imagesDir = '../../images/houses/';
    var files = [];
    for (var i = 1; i <= 5; i++) {
      var s = imagesDir + i + '.jpg';
      files.push(s);
    }

    $scope.convertImgToBase64 = function (url, callback, outputFormat) {
      var canvas = document.createElement('CANVAS'),
        ctx = canvas.getContext('2d'),
        img = new Image;
      img.crossOrigin = 'Anonymous';
      img.onload = function () {
        var dataURL;
        canvas.height = img.height;
        canvas.width = img.width;
        ctx.drawImage(img, 0, 0);
        dataURL = canvas.toDataURL(outputFormat);
        callback.call(this, dataURL);
        canvas = null;
      };
      img.src = url;
    }

    $scope.recurseFilesIter = function (array, index) {
      if (array.length == index)
        return;

      var fileName = array[index];
      $scope.convertImgToBase64(fileName, function (file64) {
        console.log(file64);
        $scope.houses.$add(file64);
        $scope.recurseFilesIter(array, index + 1);
      })
    }

    $scope.recurseFilesIter(files, 0);

  });




