'use strict';

angular.module('app')
  .directive('svOctagon', function () {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '../../views/directives/sv-octagon.html',
      scope: {},
      link: function ($scope, element, attr) {
        var canvas = document.getElementById('canvas');
        var ctx = canvas.getContext('2d');
        ctx.rotate(21.5 * Math.PI / 180);

        drawMe(108, true, 1);
        drawMe(100, false, 5);

        function drawMe(size, isFilled, lineWidth) {
	        lineWidth = lineWidth || 1;
          var numberOfSides, angle, Xcenter, Ycenter;
          numberOfSides = 8;
          angle = 2 * Math.PI / numberOfSides;
          Xcenter = 130;
          Ycenter = 58;

          ctx.beginPath();
          ctx.moveTo(Xcenter + size, Ycenter);

          for (var i = 1; i < numberOfSides; i += 1) {
            ctx.lineTo(Xcenter + size * Math.cos(i * angle), Ycenter + size * Math.sin(i * angle));
          }
          ctx.closePath();
          ctx.strokeStyle = "white";
          ctx.fillStyle = 'red';
          ctx.lineWidth = lineWidth;
          ctx.stroke();
          if (isFilled) {
            ctx.fill();
          }
        }
      }
    };
  });
