const menuActive = document.querySelector('.menu_active');
const cross = document.querySelector('.burger-menu_button');
const popover = document.querySelector('.burger-popover_close');
const them = document.querySelector('.black_them')

function toggleMenu() {
	menuActive.classList.toggle('hidden');
}

cross.addEventListener('click', toggleMenu);
popover.addEventListener('click', toggleMenu);
them.addEventListener('click', toggleMenu )
