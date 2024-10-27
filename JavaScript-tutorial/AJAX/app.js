const textBtn = document.querySelector('.btn-text');
const jsonBtn = document.querySelector('.btn-JSON');
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
