console.log('filters project');

let filteredProducts = [...products];

// display the products:
const productsContainer = document.querySelector('.products-container');
const displayProducts = () => {
	if (filteredProducts.length < 1) {
		productsContainer.innerHTML = `
			<h6>Sorry, we don't have this. Try someting else :)</h6>
		`;
	} else {
		productsContainer.innerHTML = filteredProducts
			.map((product) => {
				const { id, title, image, company, price } = product;
				return `
				<article class="product" data-id="${id}">
					<img src="${image}" class="product-img img" />
					<footer>
						<h5 class="product-name">${title}</h5>
						<span class="product-price">${price}</span>
					</footer>
				</article>
	`;
			})
			.join('');
	}
};
displayProducts();

// search by input:
const inputForm = document.querySelector('.input-form');
const searchInput = document.querySelector('.search-input');
inputForm.addEventListener('keyup', () => {
	const inputValue = searchInput.value;
	filteredProducts = products.filter((product) => {
		return product.title.toLowerCase().includes(inputValue.toLowerCase());
	});
	displayProducts();
});

// filter by company:
// - show the buttons
const companyButtons = document.querySelector('.companies');
const displayButtons = () => {
	const companiesList = ['any', ...new Set(products.map((product) => product.company))];
	companyButtons.innerHTML = companiesList
		.map((company) => `<button class="company-btn" data-id="${company}">${company}</button>`)
		.join('');
};
displayButtons();
// - filter on click
companyButtons.addEventListener('click', (e) => {
	if (e.target.classList.contains('company-btn')) {
		let companyName = `${e.target.dataset.id}`;
		filteredProducts =
			companyName === 'any'
				? (filteredProducts = [...products])
				: products.filter((product) => {
						return product.company.includes(companyName);
				  });
		searchInput.value = '';
		displayProducts();
	}
});
