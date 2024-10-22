console.log('filters project');

let filteredProducts = [...products];

const productsContainer = document.querySelector('.products-container');

const displayProducts = () => {
	// TODO: if statement "sorry..."
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
};
displayProducts();
