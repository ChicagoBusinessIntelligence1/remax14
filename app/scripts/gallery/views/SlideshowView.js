/*** SlideshowView ***/

define(function(require, exports, module) {
  var View = require('famous/core/View');
  var Surface = require('famous/core/Surface');
  var Transform = require('famous/core/Transform');
  var StateModifier = require('famous/modifiers/StateModifier');

  function SlideshowView() {
    View.apply(this, arguments);

    this.rootModifier = new StateModifier({
      size: this.options.size,
      origin: [0.5, 0],
      align: [0.5, 0]
    });

    this.mainNode = this.add(this.rootModifier);
  }

  SlideshowView.prototype = Object.create(View.prototype);
  SlideshowView.prototype.constructor = SlideshowView;

  SlideshowView.DEFAULT_OPTIONS = {
    sizd: [450, 500]
  };

  module.exports = SlideshowView;
});
