$(document).ready(function(){
	// slide local content like aboutme etc. on click events.
	$(".inlinelink").on("click", function(){
		$(this).closest("li").find(".nodisplay").slideToggle('fast');
		return false;
	});
});

// konami code!
cheet('↑ ↑ ↓ ↓ ← → ← → b a', function () {
	function getRandomColor() {
	    var letters = '0123456789ABCDEF'.split('');
	    var color = '#';
	    for (var i = 0; i < 6; i++ ) {
	        color += letters[Math.round(Math.random() * 15)];
	    }
	    return color;
	}
	$('body').css('background-color',getRandomColor());
	$('.header').css('color',getRandomColor());
	$('div').css('font-family','Comic Sans MS');
});

// konami fail!
cheet('↑ ↑ ↓ ↓ ← → ← → a b', function(){
	alert("Yeah... Try again.");
});
