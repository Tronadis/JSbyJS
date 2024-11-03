const url = 'https://randomuser.me/api/';

const getUser = async () => {
	const response = await fetch(url);
	const data = await response.json();
	const person = data.results[0];
	const { large: portrait } = person.picture;
	const { first, last } = person.name;
	const { email, phone } = person;
	const {
		dob: { age },
	} = person; // alt for `const {age} = person.dob;`
	const {
		street: { number, name },
	} = person.location;
	const { password } = person.login;
	return { portrait, name: `${first} ${last}`, email, age, street: `${number}, ${name}`, phone, password };
};

export default getUser;
