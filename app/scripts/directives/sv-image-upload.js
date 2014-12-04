'use strict';

angular.module('app')
  .directive('svImageUpload', function (FileUploader, imgSize) {

    function scale(initHeight, initWidth) {
      initHeight = parseInt(initHeight);
      initWidth = parseInt(initWidth);

      imgSize.w = parseInt(imgSize.w);
      imgSize.h = parseInt(imgSize.h);

      var finalWidth, finalHeight;

      var heightCoef;
      if (initHeight > imgSize.h) {
        heightCoef = imgSize.h / initHeight;
        var scaledWidth = Math.round(heightCoef * initWidth);
        if (scaledWidth > imgSize.w) {
          var widthCoef = imgSize.w / initWidth;
          finalWidth = imgSize.w;
          finalHeight = Math.round(widthCoef * initHeight);
        } else {
          finalHeight = imgSize.h;
          finalWidth = Math.round(heightCoef * initWidth);
        }
      }
      return {scaledWidth: finalWidth, scaledHeight: finalHeight};
    }

    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-image-upload.html',
      link: function ($scope, element, attr) {

        $scope.uploader.uploadItem = function (item) {
          var reader = new FileReader();

          reader.onload = onLoadFile;
          var file = item._file;

          reader.readAsDataURL(file);

          function onLoadFile(event) {
            var canvas = document.createElement('CANVAS');
            var ctx = canvas.getContext('2d');

            var img = new Image();
            img.src = event.target.result;

            var initWidth = parseInt(img.naturalWidth);
            var initHeight = parseInt(img.naturalHeight);

            if (initWidth < imgSize.w || initHeight < imgSize.h) {
              var indexOf = $scope.uploader.queue.indexOf(item);

              $scope.$apply(function () {
                $scope.uploader.queue[indexOf] = _.extend($scope.uploader.queue[indexOf], {
                  tooSmall: true
                });
              })
              toastr.warning('Image is too small to be shown');
              return;
            }
            var __ret = scale(initHeight, initWidth);
            var scaledWidth = __ret.scaledWidth;
            var scaledHeight = __ret.scaledHeight;
            canvas.width = scaledWidth;
            canvas.height = scaledHeight;
            var scaledImage = new Image();
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            var dataURL = canvas.toDataURL('image/jpeg');
            $scope.addImage(dataURL);
            var indexOf = $scope.uploader.queue.indexOf(item);
            $scope.uploader.queue.splice(indexOf, 1);

            toastr.success('Image has been successfully loaded!');
            canvas = null;
          }
        }
        $scope.uploader.uploadAll = function () {
          var images = $scope.uploader.queue;
          for (var i = 0; i < images.length; i++) {
            var image = images[i];
            $scope.uploader.uploadItem(image);
          }
        }
      }
    };
  });
