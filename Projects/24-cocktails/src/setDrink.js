const setDrink = (section) => {
	section.addEventListener('click', (e) => {
		// e.preventDefault(); // temp
		const id = e.target.parentElement.dataset.id;
		localStorage.setItem('drink', id);
	});
};

export default setDrink;
