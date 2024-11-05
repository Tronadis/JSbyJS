import get from './getElement.js';
import presentDrinks from './presentDrinks.js';

const baseURL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`;
const form = get('.search-form');
const input = get('[name="drink"]');

input.value = ''; // fixes remanance of old input in Firefox
form.addEventListener('keyup', (e) => {
	const value = input.value;
	if (!value) {
		presentDrinks(URL);
		return;
	}
	presentDrinks(`${baseURL}${value}`);
});
