// ****** SELECT ITEMS **********
const alert = document.querySelector('.alert');
const form = document.querySelector('.grocery-form');
const grocery = document.getElementById('grocery');
const submitBtn = document.querySelector('.submit-btn');
const container = document.querySelector('.grocery-container');
const list = document.querySelector('.grocery-list');
const clearBtn = document.querySelector('.clear-btn');
// edit option
let editElement;
let editFlag = false;
let editID = '';

// ****** EVENT LISTENERS **********
form.addEventListener('submit', addItem);
clearBtn.addEventListener('click', clearItems);

// ****** FUNCTIONS **********
function addItem(e) {
	e.preventDefault();
	const value = grocery.value;
	const id = new Date().getTime().toString(); // Just a hack to get a unique string locally. Not for IRL.
	if (value && !editFlag) {
		const element = document.createElement('article');
		element.classList.add('grocery-item');
		const attr = document.createAttribute('data-id');
		attr.value = id;
		element.setAttributeNode(attr);
		element.innerHTML = `
                <p class="title">${value}</p>
                <div class="btn-container">
                    <button type="button" class="edit-btn"><i class="fas fa-edit"></i></button>
                    <button type="button" class="delete-btn"><i class="fas fa-trash"></i></button>
                </div>
        `;
		list.appendChild(element);
		displayAlert(`"${value}" added to the list`, 'success');
		container.classList.add('show-container');
		addToLocalStorage(id, value);
		setBackToDefault();

		const deleteBtn = element.querySelector('.delete-btn');
		const editBtn = element.querySelector('.edit-btn');
		deleteBtn.addEventListener('click', deleteItem);
		editBtn.addEventListener('click', editItem);
	} else if (value && editFlag) {
		// continues the work of `editItem()`.
		editElement.innerHTML = value;
		displayAlert('changed!', 'success');
		// editLocalStorage(editID, value);
		setBackToDefault();
	} else {
		displayAlert('please enter value', 'danger');
	}
}

function displayAlert(text, action) {
	alert.textContent = text;
	alert.classList.add(`alert-${action}`);
	setTimeout(function () {
		alert.textContent = '';
		alert.classList.remove(`alert-${action}`);
	}, 2000);
}

function setBackToDefault() {
	grocery.value = '';
	editFlag = false;
	editID = '';
	submitBtn.textContent = 'submit';
}

function editItem(e) {
	const element = e.currentTarget.parentElement.parentElement;
	editElement = e.currentTarget.parentElement.previousElementSibling;

	grocery.value = editElement.innerHTML;
	grocery.focus();
	editFlag = true;
	editID = editElement.dataset.id;
	submitBtn.textContent = 'edit';
	// continued in `addItem()`'s `else if(value && editFlag)` conditional.
}
function deleteItem(e) {
	const element = e.currentTarget.parentElement.parentElement;
	const id = element.dataset.id;
	const erstwhileValue = e.currentTarget.parentElement.previousElementSibling.innerText;
	list.removeChild(element);
	if (list.children.length === 0) {
		container.classList.remove('show-container');
	}
	displayAlert(`"${erstwhileValue}" removed`, 'danger');
	setBackToDefault();
	// removeFromLocalSorage(id);
}

function clearItems() {
	const items = document.querySelectorAll('.grocery-item');
	list.innerHTML = ''; // or else:
	// if (items.length > 0) {
	//     items.forEach(function (item) {
	//         list.removeChild(item);
	//     });
	// }
	container.classList.remove('show-container');
	displayAlert('the list is now empty', 'success');
	setBackToDefault();
	// localStorage.removeItem('list');
}

// ****** LOCAL STORAGE **********
function addToLocalStorage(id, value) {
	const grocery = { id, value };
	let items = getLocalStorage();
	console.log(items);
	items.push(grocery);
	localStorage.setItem('list', JSON.stringify(items));
}
// function removeFromLocalStorage(id) {};
// function editLocalStorage(id, value) {};

function getLocalStorage() {
	return localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list')) : [];
}

// ****** SETUP ITEMS **********
