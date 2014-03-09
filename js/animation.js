$(document).ready(function(){
	// Slide local content like aboutme etc. on click events.
	$(".inlinelink").on("click", function(){
		$(this).closest("li").find(".nodisplay").slideToggle('fast');
	});
});
