const numbers = document.getElementsByClassName('number');

const updateCount = (el) => {
	const value = parseInt(el.dataset.value, 10);
	const increment = Math.ceil(value / 1000);
	let initialValue = 0;

	const increaseCount = setInterval(() => {
		initialValue += increment;
		if (initialValue > value) {
			el.textContent = `${value}+`;
			clearInterval(increaseCount);
			return;
		}
		el.textContent = `${initialValue}+`;
	}, 1);
};

[...numbers].forEach((number) => updateCount(number));
