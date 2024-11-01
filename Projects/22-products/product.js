const productDOM = document.querySelector('.product');
// const url = 'https://www.course-api.com/javascript-store-single-product?id=rec43w3ipXvP28vog';
const url = 'https://www.course-api.com/javascript-store-single-product';

const fetchProduct = async () => {
	try {
		productDOM.innerHTML = `<h4 class="product-loading">Loading...<h4>`;

		// console.log(window.location.search); // Logs the URL's query string.
		const params = new URLSearchParams(window.location.search);
		const id = params.get('id');

		const response = await fetch(`${url}?id=${id}`);
		const data = await response.json();
		return data;
	} catch (error) {
		productDOM.innerHTML = `<p>There was a problem loading the product.</br>Please try again later.</p>`;
	}
};
const displayProduct = (product) => {
	const { company, colors, price, name: title, description, image } = product.fields;
	const { url: img } = image[0];
	document.title = title.toUpperCase();
	const colorSpans = colors
		.map((item) => {
			return `<span class="product-color" style="background:${item}"></span>`;
		})
		.join('');
	productDOM.innerHTML = `
            <div class="product-wrapper">
				<img src="${img}" alt="${title}" class="img" />
				<div class="product-info">
					<h3>${title}</h3>
					<h5>${company}</h5>
					<span>$ ${price / 100}</span>
					<div class="colors">${colorSpans}</div>
					<p>
						${description}
					</p>
					<button class="btn">add to cart</button>
				</div>
			</div>
    `;
};
const start = async () => {
	const data = await fetchProduct();
	displayProduct(data);
};
start();

// In my solo attempt before watching the lesson,
// I forgot about the javascript-store-single-product url,
// so I used `find()` to select the right item:

/*
    const url = 'https://www.course-api.com/javascript-store-products';
    const productId = 'rec43w3ipXvP28vog'; // temp hard-coded
    
    const fetchProduct = async () => {
	productDOM.innerHTML = `<div class="loading"></div>`;
	try {
		const resp = await fetch(url);
		const allData = await resp.json();
		const isWanted = (item) => item.id === productId;
		data = allData.find(isWanted);
		return data;
	} catch (error) {
		productDOM.innerHTML = `<p class="error">There was an error.</p>`;
		console.log(error);
	}
}; 
// etc. (similar to index.html)
    */
