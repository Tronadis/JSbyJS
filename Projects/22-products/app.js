console.log('products project');

const url = 'https://www.course-api.com/javascript-store-products';

const productsDOM = document.querySelector('.products-center');

const fetchProducts = async () => {
	productsDOM.innerHTML = `<div class="loading"></div>`;
	try {
		const resp = await fetch(url);
		const data = await resp.json();
		console.log(data);
	} catch (error) {
		productsDOM.innerHTML = `<p class="error">There was an error.</p>`;
		console.log(error);
	}
};

fetchProducts();
