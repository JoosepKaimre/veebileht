<!DOCTYPE js>

$(function() {
  
  // sizeSections sets the height of each section element to the viewport
  // height unless the content height is larger than the the viewport
  // requires the inner content to be wrapped in a .content div
  var sizeSections = function() {
    var viewHeight = $(window).height();
    $("section").each(function(){
      var naturalHeight = $(this).find(".content").outerHeight();
      if ( naturalHeight > viewHeight) {
        $(this).css("height", "auto");
      } else {
        $(this).css("height", viewHeight + "px");
      }
    });
  }
  window.location = 'vast toimib.html#portfolio-link';
  window.location = 'vast toimib.html#about-link';
  // call sizeSections on load
  sizeSections();
  // attach smoothScroll jQuery plugin to indicated links
  $('.navbar a').smoothScroll();
  
  // call sizeSections whenever the window is resized
  $(window).resize(function() {
    sizeSections();
  });
  
});