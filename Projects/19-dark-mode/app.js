console.log('dark mode');

// DARK MODE:
const btn = document.querySelector('.btn');

// my attempt (works):
/* const html = document.querySelector('html');
toggleTheme = () => {
	if (html.classList.contains('my-dark-theme')) {
		html.classList.remove('my-dark-theme');
	} else {
		html.classList.add('my-dark-theme');
	}
};
btn.addEventListener('click', toggleTheme); */

// Teacher's straighter way:
btn.addEventListener('click', () => {
	document.documentElement.classList.toggle('dark-theme');
});
/* — `documentElelement` = the <html> tag 
   — `toggle` is a shorthand for that if else logic */

// IMPORT DATA:
const articlesContainer = document.querySelector('.articles');
const articlesData = articles
	.map((article) => {
		console.log(article);
		const { title, date, length, snippet } = article;
		// TODO: format the date
		return `
			<article class="post">
				<h2>${title}</h2>
				<div class="post-info"><span>${date}</span><span>${length}</span></div>
				<p>${snippet}</p>
			</article>
	`;
	})
	.join('');
articlesContainer.innerHTML = articlesData;
