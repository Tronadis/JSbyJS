console.log('wiki search');

const url = 'https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=20&format=json&origin=*&srsearch=';

const formDOM = document.querySelector('.form');
const inputDOM = document.querySelector('.form-input');
const resultsDOM = document.querySelector('.results');

formDOM.addEventListener('submit', (e) => {
	e.preventDefault();
	const value = inputDOM.value;
	value.textContent = ''; // for Firefox
	if (!value) resultsDOM.innerHTML = /*html*/ `<div class="error">Please write something.</div>`;
	fetchPages(value);
});
const fetchPages = async (searchValue) => {
	resultsDOM.innerHTML = /*html*/ `<div class="loading"></div>`;
	try {
		const response = await fetch(`${url}${searchValue}`);
		const data = await response.json();
		const results = data.query.search;
		if (results.length < 1) resultsDOM.innerHTML = /*html*/ `<div class="error">Sorry, no matching result :(</div>`;
		renderResults(results);
	} catch (error) {
		resultsDOM.innerHTML = /*html*/ `<div class="error">There was an error while fetching your search :(</div>`;
	}
};
const renderResults = (list) => {
	console.log(list); // TEMP
};
