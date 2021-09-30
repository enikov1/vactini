'use strict'

const calc_button_minus = document.querySelector('.minus');
const calc_button_plus = document.querySelector('.plus');
const calc_button_input = document.querySelector('.count');

calc_button_minus.addEventListener('click', function () {
	let count = parseInt(calc_button_input.value) - 1;

	count = count < 1 ? 1 : count;
	calc_button_input.value = count;
});

calc_button_plus.addEventListener('click', function () {
	let count = parseInt(calc_button_input.value) + 1;
	calc_button_input.value = count;
});

const mask_phone = document.querySelectorAll('.mask--phone');

const im = new Inputmask("+7 (999) 999-99-99");
if (mask_phone) {
	mask_phone.forEach(e => {
		im.mask(e);
	});
}