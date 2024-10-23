console.log('filters project');

let filteredProducts = [...products];

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

const inputForm = document.querySelector('.input-form');
const searchInput = document.querySelector('.search-input');

inputForm.addEventListener('keyup', () => {
	const inputValue = searchInput.value;
	filteredProducts = products.filter((product) => {
		return product.title.toLowerCase().includes(inputValue.toLowerCase());
	});
	displayProducts();
});
