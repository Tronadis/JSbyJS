const textBtn = document.querySelector('.btn-text');
const jsonBtn = document.querySelector('.btn-JSON');
const fetchBtn = document.querySelector('.fetch-JSON');
const textUrl = './API/sample.txt';
const jsonUrl = './API/people.json';
const xhr = new XMLHttpRequest();
// console.log(xhr);

const getData = (url) => {
	xhr.open('GET', url);
	xhr.onreadystatechange = function () {
		// console.log(xhr);

		if (xhr.readyState === 4 && xhr.status === 200) {
			// console.log(xhr.responseText);
			const text = document.createElement('p');
			text.textContent = xhr.responseText;
			document.body.appendChild(text);
			console.log('done');
			console.log(typeof xhr.responseText);
		} else {
			console.log('not yet', {
				status: xhr.status,
				text: xhr.statusText,
				state: xhr.readyState,
			});
		}
	};
	xhr.send();
};

const getJsonData = (url) => {
	xhr.open('GET', url);
	xhr.onreadystatechange = function () {
		// console.log(xhr);

		if (xhr.readyState === 4 && xhr.status === 200) {
			// console.log(xhr.responseText);
			const data = JSON.parse(xhr.responseText);
			const displayData = data
				.map((item) => {
					return `<p>${item.name}</p>`;
				})
				.join('');
			const div = document.createElement('div');
			div.innerHTML = displayData;
			document.body.appendChild(div);
			console.log('done');
			console.log(typeof xhr.responseText);
			console.log(typeof data);
			console.log(data);
		} else {
			console.log('not yet', {
				status: xhr.status,
				text: xhr.statusText,
				state: xhr.readyState,
			});
		}
	};
	xhr.send();
};

textBtn.addEventListener('click', () => getData(textUrl));
jsonBtn.addEventListener('click', () => getJsonData(jsonUrl));

// fetch:

// - without async/await
/* fetchBtn.addEventListener('click', () => {
	fetch(jsonUrl)
		.then((resp) => resp.json())
		.then((data) => {
			displayItems(data);
		})
		.catch((err) => console.log(err));
}); */

// - with async/await
fetchBtn.addEventListener('click', async () => {
	const response = await fetch(jsonUrl);
	const data = await response.json();
	displayItems(data);
});

const displayItems = (items) => {
	const displayData = items
		.map((item) => {
			const { name } = item; // This is the same as `const name = item.name`, but using object destructuring.
			return `<p>${name}</p>`;
		})
		.join('');
	const div = document.createElement('div');
	div.innerHTML = displayData;
	document.body.appendChild(div);
};
/* Note: `const` and arrow functions still cannot be hoisted, 
	but in this case since `fetch` is asynchronous, 
	`displayItems` is read before the button can be clicked :)  */
