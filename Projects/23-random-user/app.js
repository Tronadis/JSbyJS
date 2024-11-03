console.log('random-user project');

import get from './utils/getelEment.js'; //btn
import getUser from './utils/fetchUser.js';
import displayUser from './utils/displayUser.js';

const btn = get('.btn');

const showUser = async () => {
	// retrieve data item from API
	const person = await getUser();
	// then display
	displayUser(person);
};

window.addEventListener('DOMContentLoaded', showUser);
btn.addEventListener('click', showUser);
