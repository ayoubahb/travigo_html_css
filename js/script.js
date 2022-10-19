const header = document.querySelector('header');
const whiteLogo = document.querySelector('.w_logo');
const blackLogo = document.querySelector('.b_logo');

window.addEventListener('scroll', function () {
	header.classList.toggle('sticky', window.scrollY > 0);
	whiteLogo.classList.toggle('unvisible', window.scrollY > 0);
	blackLogo.classList.toggle('unvisible', window.scrollY == 0);
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navbar.classList.toggle('open');
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navbar.classList.remove('open');
};
