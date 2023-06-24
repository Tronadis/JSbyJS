// 1. create function fullName
// 2. accept two parameters "firstName", "lastName"
// 3. add them together (concat) and return result in uppercase
// 4. invoke fullName and pass some values
// 5. log result
// 6. change the order of arguments
// 7. refactor to object parameter

// me:
function fullName(firstName, lastName) {
	console.log(firstName + ' ' + lastName.toUpperCase());
	console.log(`${firstName} ${lastName.toUpperCase()}`);
	console.log(`${lastName.toUpperCase()} ${firstName}`);
}
fullName('John', 'Doe');
fullName('Jane', 'Dee');

// teacher:
function fullName2(firstName, lastName) {
	const fullName = `${firstName} ${lastName}`;
	return fullName.toUpperCase();
}
console.log(fullName2('John', 'Smith'));
// also
function fullName3({ firstName, lastName }) {
	// function params as object params
	const fullName = `${firstName} ${lastName}`;
	return fullName.toUpperCase();
}
console.log(fullName3({ firstName: 'Peter', lastName: 'Jordan' }));
console.log(fullName3({ lastName: 'Jordan', firstName: 'Peter' }));
// (So the idea was to decare 2nd value first, not to change the order in output!)
