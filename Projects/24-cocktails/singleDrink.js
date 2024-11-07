console.log('single drink');

import fetchDrinks from './src/fetchDrinks.js';
import displayDrink from './src/displaySingleDrink.js';

const presentDrink = async () => {
	const id = localStorage.getItem('drink');
	if (!id) {
		// redirect to home page if no item id in storage
		alert(`No item remembered, back to all drinks.`);
		window.location.replace('index.html');
	} else {
		const drink = await fetchDrinks(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
		displayDrink(drink);
	}
};

window.addEventListener('DOMContentLoaded', presentDrink);
