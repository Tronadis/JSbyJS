// Say hello to three different persons
// using the same code, changing only the name

function helloThere() {
	console.log('Hello there, ' + fName + ' 😀');
}
let fName = 'Bob';
helloThere();
fName = 'Anna';
helloThere();
fName = 'Suzy';
helloThere();

// Or, using a placeholder "parameter" the function shall return as an "argument"
// (aka a local variable):
function greet(name) {
	console.log('Hello, there, ' + name + ' 🖐');
}
greet('Bob');
greet('Anna');
greet('Suzy');
