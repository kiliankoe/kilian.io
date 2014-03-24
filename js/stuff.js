$(document).ready(function(){
	// slide local content like aboutme etc. on click events.
	$(".inlinelink").on("click", function(){
		$(this).closest("li").find(".nodisplay").slideToggle('fast');
		return false;
	});
});

// konami code!
cheet('↑ ↑ ↓ ↓ ← → ← → b a', function () { $('span#name').text("Kili-chan") });
