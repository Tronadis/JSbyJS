function getElement(selection) {
	const element = document.querySelector(selection);
	if (element) {
		return element;
	}
	throw new Error(`The selector "${selection}" seems incorrect.`);
}

class Counter {
	constructor(element, value) {
		this.counter = element;
		this.value = value;
		this.decreaseBtn = element.querySelector('.decrease');
		this.resetBtn = element.querySelector('.reset');
		this.increaseBtn = element.querySelector('.increase');
		this.valueSpan = element.querySelector('.value');
		this.valueSpan.textContent = this.value;
		// Bind current `this` to te prototype's functions:
		this.decrease = this.decrease.bind(this);
		this.reset = this.reset.bind(this);
		this.increase = this.increase.bind(this);
		// .
		this.decreaseBtn.addEventListener('click', this.decrease);
		this.resetBtn.addEventListener('click', this.reset);
		this.increaseBtn.addEventListener('click', this.increase);
	}
	decrease = function () {
		this.value--;
		this.valueSpan.textContent = this.value;
	};
	reset = function () {
		this.value = 0;
		this.valueSpan.textContent = this.value;
	};
	increase = function () {
		this.value++;
		this.valueSpan.textContent = this.value;
	};
}

const firstCounter = new Counter(getElement('.first-counter'), 100);
const secondCounter = new Counter(getElement('.second-counter'), 200);
