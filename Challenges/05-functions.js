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

// The challenge:

// 1. create "calculateTotal" function
// 2. add two parameters subTotal, tax
// 3. return sum of parameters
// 4. create 3 vars "order1","order2","order3"
// 5. call calculateResult, pass in some values and assign result to each order
// 6. log all three orders
// 7. refactor "calculateTotal" to function expression

// With function declaration:
function calculateTotal(subTotal, tax) {
	return subTotal + tax;
}
let order1 = calculateTotal(200, 20);
let order2 = calculateTotal(300, 30);
let order3 = calculateTotal(400, 40);
console.log(order1, order2, order3);

// The same, with function expression:
const calculateResult = function (subTotal, tax) {
	return subTotal + tax;
};
let order4 = calculateResult(200, 20);
let order5 = calculateResult(300, 30);
let order6 = calculateResult(400, 40);
console.log(order4, order5, order6);
