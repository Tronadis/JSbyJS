import get from './getelEment.js';
import removeClassName from './removeClassName.js';

const img = get('.user-img');
const title = get('.user-title');
const value = get('.user-value');
const btns = [...document.querySelectorAll('.icon')];

const displayUser = (person) => {
	img.src = person.portrait;
	title.textContent = `My name is`;
	value.textContent = person.name;
	removeClassName(btns, 'active');
	btns[0].classList.add('active');
	btns.forEach((btn) => {
		const label = btn.dataset.label;
		btn.addEventListener('click', () => {
			title.textContent = `My ${label} is`;
			value.textContent = person[label];
			removeClassName(btns, 'active');
			btn.classList.add('active');
		});
	});
};

export default displayUser;
