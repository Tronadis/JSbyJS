const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');

slides.forEach(function (slide, index) {
	slide.style.left = `${index * 100}%`;
});

let counter = 0;
prevBtn.addEventListener('click', function () {
	counter--;
	carousel();
});
nextBtn.addEventListener('click', function () {
	counter++;
	carousel();
});

// custom - match button names to the real options
function changeBtnNames() {
	if (counter === 0) {
		prevBtn.innerText = `last`;
	} else {
		prevBtn.innerText = `prev`;
	}
	if (counter === slides.length - 1) {
		nextBtn.innerText = `first`;
	} else {
		nextBtn.innerText = `next`;
	}
	if (counter === 1) {
		prevBtn.innerText = `first`;
	}
	if (counter === slides.length - 2) {
		nextBtn.innerText = `last`;
	}
}
prevBtn.innerText = `last`;
// working with the slides - go in a circle
function carousel() {
	if (counter === slides.length) {
		counter = 0;
	}
	if (counter < 0) {
		counter = slides.length - 1;
	}
	changeBtnNames(); // Call it here, not before the `if`s, for it to work in all cases.
	slides.forEach(function (slide) {
		slide.style.transform = `translateX(-${counter * 100}%)`;
	});
}

// working with the buttons - hide non-existent options
/* function carousel() {
	if (counter < slides.length - 1) {
		nextBtn.style.display = 'block';
	} else {
		nextBtn.style.display = 'none';
	}
	if (counter > 0) {
		prevBtn.style.display = 'block';
	} else {
		prevBtn.style.display = 'none';
	}
	slides.forEach(function (slide) {
		slide.style.transform = `translateX(-${counter * 100}%)`;
	});
}
prevBtn.style.display = 'none'; */
