function getElement(selection) {
	const element = document.querySelector(selection);
	if (element) {
		return element;
	}
	throw new Error(`The selector "${selection}" seems incorrect.`);
}

function Counter(element, value) {
	this.counter = element;
	this.value = value;
	this.decreaseBtn = element.querySelector('.decrease');
	this.resetBtn = element.querySelector('.reset');
	this.increaseBtn = element.querySelector('.increase');
	this.valueSpan = element.querySelector('.value');
	this.valueSpan.textContent = this.value;
}

const firstCounter = new Counter(getElement('.first-counter'), 100);
const secondCounter = new Counter(getElement('.second-counter'), 200);
