let count = 50;
let scene = document.querySelector('body');
let i = 0;
while(i < count){
	let star = document.createElement('i');
	star.classList.add('count');
	scene.appendChild(star);
	i++
}
anime({
  	targets: '.count',
	scaleY: -1,
  	delay: anime.stagger(10, {start: 500}),
  	loop: true,
});