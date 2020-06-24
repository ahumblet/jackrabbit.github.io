// This logic will still be required for the dots but I need to add logic for the arrows 

$(document).ready(function() {

  $("#controls").on('click', 'span', function() {

    $("#slideshow img").removeClass("opaque");
    var newImage = $(this).index();

    $("#slideshow img").eq(newImage).addClass("opaque");
    $("#controls span").removeClass("selected");
    $(this).addClass("selected");
    
  });
});