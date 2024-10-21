console.log('dark mode');

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
