

var tl = new TimelineLite();

$(document).on("mouseover", ".el1", function(evt){
  tl.to($(".el1-more"), 0.5, {top:"0px", overwrite:1, ease:"Back.easeOut"});
}).on("mouseout", ".el1", function(evt){
  // uses autoAlpha instead of alpha
  tl.to($(".el1-more"), 0.5, {top:'180px', overwrite:1});
});

$(document).on("mouseover", ".el2", function(evt){
  tl.to($(".el2-more"), 0.5, {top:"0px",  overwrite:1, ease:"Back.easeOut"});
}).on("mouseout", ".el2", function(evt){
  // uses autoAlpha instead of alpha
  tl.to($(".el2-more"), 0.5, {top:'180px', overwrite:1});
});
$(document).on("mouseover", ".el3", function(evt){
  tl.to($(".el3-more"), 0.5, {top:"0px",  overwrite:1, ease:"Back.easeOut"});
}).on("mouseout", ".el3", function(evt){
  // uses autoAlpha instead of alpha
  tl.to($(".el3-more"), 0.5, {top:'180px', overwrite:1});
});

$(document).on("mouseover", ".el4", function(evt){
  tl.to($(".el4-more"), 0.5, {top:"0px",  overwrite:1, ease:"Back.easeOut"});
}).on("mouseout", ".el4", function(evt){
  // uses autoAlpha instead of alpha
  tl.to($(".el4-more"), 0.5, {top:'180px', overwrite:1});
});
$(document).on("mouseover", ".el5", function(evt){
  tl.to($(".el5-more"), 0.5, {top:"0px",  overwrite:1, ease:"Back.easeOut"});
}).on("mouseout", ".el5", function(evt){
  // uses autoAlpha instead of alpha
  tl.to($(".el5-more"), 0.5, {top:'180px', overwrite:1});
});

$(document).on("mouseover", ".el6", function(evt){
  tl.to($(".el6-more"), 0.5, {top:"0px",  overwrite:1, ease:"Back.easeOut"});
}).on("mouseout", ".el6", function(evt){
  // uses autoAlpha instead of alpha
  tl.to($(".el6-more"), 0.5, {top:'180px', overwrite:1});
});
$(document).on("mouseover", ".el7", function(evt){
  tl.to($(".el7-more"), 0.5, {top:"0px",  overwrite:1, ease:"Back.easeOut"});
}).on("mouseout", ".el7", function(evt){
  // uses autoAlpha instead of alpha
  tl.to($(".el7-more"), 0.5, {top:'180px', overwrite:1});
});

$(document).on("mouseover", ".el8", function(evt){
  tl.to($(".el8-more"), 0.5, {top:"0px",  overwrite:1, ease:"Back.easeOut"});
}).on("mouseout", ".el8", function(evt){
  // uses autoAlpha instead of alpha
  tl.to($(".el8-more"), 0.5, {top:'180px', overwrite:1});
});
