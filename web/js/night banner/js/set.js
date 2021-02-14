function stars() {
	let count = 1000;
	let scene = document.querySelector('.scene');
	let i = 0;
	while(i < count){
		let star = document.createElement("i");
		let x = Math.floor(Math.random() * window.innerWidth);
		let y = Math.floor(Math.random() * window.innerHeight * 6);
		let duration = Math.random() * 10;
		let size = Math.random() * 2;

		star.style.left = x + 'px';
		star.style.top = y + 'px';
		star.style.width = 1.5 + size +'px';
		star.style.height = 1.5 + size +'px';
		star.style.animationDuration = 2 + duration +'s';

		scene.appendChild(star);
		i++
	}	
}
stars();