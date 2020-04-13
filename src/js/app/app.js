const menu = document.querySelector('.navigation');
const overlay = document.querySelector('.overlay');

menu.addEventListener('click', () => {
	overlay.classList.add('open');
});

overlay.addEventListener('click', () => {
	overlay.classList.remove('open');
});
