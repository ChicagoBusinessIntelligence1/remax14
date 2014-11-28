'use strict';

angular.module('app')
  .directive('svImageUpload', function (ImageServiceService, FileUploader, imgWidth) {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-image-upload.html',
      link: function ($scope, element, attr) {

        $scope.uploader.uploadItem = function () {
          var reader = new FileReader();
          reader.onload = onLoadFile;
          var uploadFile = this.queue[0];
          var file = uploadFile._file;

          reader.readAsDataURL(file);

          function onLoadFile(event) {
            var canvas = document.createElement('CANVAS');
            var ctx = canvas.getContext('2d');

            var img = new Image();
            img.src = event.target.result;
            var initWidth = parseInt(img.naturalWidth);
            var initHeight = parseInt(img.naturalHeight);

            if (initWidth < imgWidth) {
              $scope.$apply(function () {
                $scope.uploader.queue[0] = _.extend(uploadFile, {
                  tooSmall: true
                });
              })
            }
            var scaledWidth = imgWidth;
            var scaledHeight = Math.round((initHeight * imgWidth) / initWidth);

            canvas.width = scaledWidth;
            canvas.height = scaledHeight;
            ctx.drawImage(img, 0, 0);
            var dataURL = canvas.toDataURL('image/jpeg');

            canvas = null;
          }
        }
        $scope.uploader.uploadAll = function () {
          var i = 9;
        }

        function convertImgToBase64(url, callback, outputFormat) {

          var img = new Image;
          img.crossOrigin = 'Anonymous';

          img.onload = function () {
            canvas.height = img.height;
            canvas.width = img.width;
            ctx.drawImage(img, 0, 0);
            var dataURL = canvas.toDataURL(outputFormat || 'image/png');
            callback.call(this, dataURL);
            canvas = null;
          };
          img.src = url;
        }

      }

    };
  });
