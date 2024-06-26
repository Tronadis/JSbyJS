// Method 1: traversing the DOM

// const btns = document.querySelectorAll('.question-btn');

// btns.forEach(function (btn) {
// 	btn.addEventListener('click', function (e) {
// 		const question = e.currentTarget.parentElement.parentElement;
// 		question.classList.toggle('show-text');
// 	});
// });

// Method 2: using selectors inside the element

const questions = document.querySelectorAll('.question');

questions.forEach(function (question) {
	console.log(question);
	const btn = question.querySelector('.question-btn');
	console.log(btn);
	btn.addEventListener('click', function () {
		questions.forEach(function (item) {
			if (item !== question) {
				item.classList.remove('show-text');
			}
		}); // auto-closes previousely open item
		question.classList.toggle('show-text');
	});
});
