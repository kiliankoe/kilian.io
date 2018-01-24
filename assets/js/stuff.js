function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.round(Math.random() * 15)];
    }
    return color;
}
function getLightRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.round(Math.random() * 5)+10];
    }
    return color;
}

// konami code!
var isPlaying = false;
cheet('↑ ↑ ↓ ↓ ← → ← → b a', function () {
	$('body').css('font-family','Comic Sans MS');
	if (!isPlaying) {
		var audio = new Audio('./assets/files/hey.mp3');
		audio.play();
		isPlaying = true;
	}
	$('img').css('-webkit-animation', 'spin 2s linear infinite');
	$('img').css('-moz-animation', 'spin 2s linear infinite');
	$('img').css('animation', 'spin 2s linear infinite');

	setInterval(function(){
		$('html').css('background-color',getRandomColor());
		$('body').css('color',getRandomColor());
		$('a').css('color',getRandomColor());
		$('p').css('font-size',(Math.random()*0.5)+16);
	}, 100);

    $('section').prepend( "<article class='center'><h2>KONAMI MODE</h2></article>" );
});

// konami fail!
cheet('↑ ↑ ↓ ↓ ← → ← → a b', function(){
	alert("Yeah... Try again.");
});

let cursor_iterator = 0;
const emojis = [
  '🎉',
  '🦄',
  '❤️',
  '🚀',
];

setInterval(() => {
    document.body.style.cursor = `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="30" height="28" style="font-size:20px"><text y="26">${emojis[cursor_iterator]}</text></svg>'), auto`;

  if (cursor_iterator === 3) {
    cursor_iterator = 0;
  } else {
      cursor_iterator++;
  }
}, 500);
