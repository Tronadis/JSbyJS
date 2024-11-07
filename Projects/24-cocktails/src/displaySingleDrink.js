import { hideLoading } from './toggleLoading.js';
import get from './getElement.js';

const displayDrink = (data) => {
	hideLoading();
	const drink = data.drinks[0];
	const { strDrinkThumb: image, strDrink: name, strInstructions: desc } = drink;
	/* 	const listHardCoded = [
		drink.strIngredient1,
		drink.strIngredient2,
		drink.strIngredient3,
		drink.strIngredient4,
		drink.strIngredient5,
		drink.strIngredient6,
		drink.strIngredient7,
	]; */
	// iterate over ingredients dynamically (by fellow student Frederick)
	const list = Object.entries(drink).filter(([key, value]) => key.includes('Ingredient') && value);

	const img = get('.drink-img');
	const drinkName = get('.drink-name');
	const description = get('.drink-desc');
	const ingredients = get('.drink-ingredients');

	document.title = name;
	img.src = image;
	img.alt = name;
	drinkName.textContent = name;
	description.textContent = desc;
	/* 	ingredients.innerHTML = listHardCoded
		.map((item) => {
			if (!item) return; 
			return `<li><i class="far fa-check-square"></i> ${item}</li>`;
		})
		.join('');
};  */
	// Frederick's display with the logic inside the string!
	ingredients.innerHTML = `${list.map(([, item]) => `<li>${item}</li>`).join('')}`;
};

export default displayDrink;
