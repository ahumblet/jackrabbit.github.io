// This logic will still be required for the dots but I need to add logic for the arrows 

$(document).ready(function() {

  $("#controls").on('click', 'span', function() {
    var newImageIndex = $(this).index(); 

    console.log($("#controls span.dot"));


    $("#slideshow img").removeClass("opaque");
    $("#controls span.dot").removeClass("selected");
    $("#slideshow img").eq(newImageIndex).addClass("opaque");
    $("#controls span.dot").eq(newImageIndex).addClass("selected");
  });

	$("#arrows").on('click', 'span', function() {
			var arrowIndex = $(this).index(); 
			var currImageIndex = $("#slideshow img").filter(".opaque").index();
			var numImages = $("#slideshow img").length;
			var newImageIndex;

			if (arrowIndex == 0) {
				newImageIndex = ((currImageIndex - 1) > 0) ? (currImageIndex - 1) : (numImages - 1);
			} else if (arrowIndex == 1) {
				newImageIndex = (currImageIndex + 1) % numImages;
			}

			$("#slideshow img").removeClass("opaque");
			$("#controls span.dot").removeClass("selected");
    	$("#slideshow img").eq(newImageIndex).addClass("opaque");
    	$("#controls span.dot").eq(newImageIndex).addClass("selected");

	  });

});
