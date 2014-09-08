

var tl = new TimelineLite();

$(document).on("mouseover", ".el1", function(evt){
  tl.to($(".el1-more"), 0.5, {top:"0px", delay:0.1, overwrite:1});
}).on("mouseout", ".el1", function(evt){
  // uses autoAlpha instead of alpha
  tl.to($(".el1-more"), 0.5, {top:'150px', delay:0.1,overwrite:2});
});
$(document).on("mouseover", ".el2", function(evt){
  tl.to($(".el2-more"), 0.5, {top:"0px", delay:0.1, overwrite:1});
}).on("mouseout", ".el2", function(evt){
  // uses autoAlpha instead of alpha
  tl.to($(".el2-more"), 0.5, {top:'150px', delay:0.1,overwrite:2});
});
