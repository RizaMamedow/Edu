const colors = [
	'#F25022',
	'#7FBA00',
	'#00A4EF',
	'#FFB900'
];

function createSquare() {
	const section = document.querySelector('.bg');
	const square = document.createElement('span');
	
	var size = Math.random() * 50;

	square.style.width = 20 + size + 'px';
	square.style.height = 20 + size + 'px';

	square.style.top = Math.random() * innerHeight + 'px';
	square.style.left = Math.random() * innerWidth + 'px';

	const bg = colors[Math.floor(Math.random() * colors.length)];

	square.style.background = bg;

	section.appendChild(square);

	setTimeout(() =>{
		square.remove()
	}, 5000)
}
setInterval(createSquare, 150);