'use strict';

angular.module('app')
  .directive('svImageUpload', function (FileUploader, imgWidth) {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-image-upload.html',
      link: function ($scope, element, attr) {

        $scope.uploader.uploadItem = function (item) {
          var reader = new FileReader();
          var breakPoint = 1;
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

            if (initWidth < imgWidth) {
              var indexOf = $scope.uploader.queue.indexOf(item);

              $scope.$apply(function () {
                $scope.uploader.queue[indexOf] = _.extend($scope.uploader.queue[indexOf], {
                  tooSmall: true
                });
              })
              toastr.warning('Image is too small to be shown');
              return;
            }
            var scaledWidth = imgWidth;
            var scaledHeight = Math.round((initHeight * imgWidth) / initWidth);

            canvas.width = scaledWidth;
            canvas.height = scaledHeight;
            ctx.drawImage(img, 0, 0);
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
