app.animation('.prop-info', function () {
  var height,
    width;
  return {
    enter: function (element, done) {
      height = element.height();
      element.css('top', -height);
      element.css('opacity', 0);

      TweenMax.to(element, 1, {opacity: 1, top: 0, onComplete: done});
    },
    leave: function (element, done) {
      TweenMax.to(element, 1, {delay: 0.4, opacity: 0, top: -height, onComplete: done});
    }
  }
});
app.animation('.accord-house', function () {
  var height,
    duration = 0.5;
  return {

    addClass: function (element, className, done) {
      height = element.height();

      if (className == 'ng-hide') {
        TweenMax.to(element, duration, {
          top: -height,
          onComplete: done
        });
      }
    },
    removeClass: function (element, className, done) {
      if (className == 'ng-hide') {
        TweenMax.to(element, duration, {
          top: 0,
          onComplete: done
        });
      }

    }
  }
});

app.animation('.info-slider', function () {
  var height,
    width;
  return {
    addClass: function (element, className, done) {

      if (className == 'ng-hide') {
        $(element).slideUp('400', function () {
          done();
        })
      }
    },
    removeClass: function (element, className, done) {
      if (className == 'ng-hide') {
        $(element).slideDown('400', function () {
          done();
        })
      }

    }
  }
});


