function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.round(Math.random() * 15)];
    }
    return color;
}

// konami code!
var isPlaying = false;
cheet('↑ ↑ ↓ ↓ ← → ← → b a', function () {
	$('div').css('font-family','Comic Sans MS');
	if (!isPlaying) {
		var audio = new Audio('./files/hey.mp3');
		audio.play();
		isPlaying = true;
	}
	$('img').css('-webkit-animation', 'spin 2s linear infinite')
	$('img').css('-moz-animation', 'spin 2s linear infinite')
	$('img').css('animation', 'spin 2s linear infinite')

	setInterval(function(){
		$('html').css('background-color',getRandomColor());
		$('body').css('color',getRandomColor());
		$('a').css('color',getRandomColor());
		$('body').css('font-size',(Math.random()*5)+10);
	}, 100);
});

// konami fail!
cheet('↑ ↑ ↓ ↓ ← → ← → a b', function(){
	alert("Yeah... Try again.");
});
