// 1. create two objects "person1", "person2"
// 2. setup name,age (15-25),
//    status ('resident', 'tourist') keys

// 3. setup if else, condition where
//    age must be bigger than 18 and status must be
//    equal to 'resident'
// 4. test with both objects

const person1 = {
	name: 'William',
	age: 22,
	localStatus: 'resident',
};
const person2 = {
	name: 'Peter',
	age: 17,
	localStatus: 'tourist',
};

if (person1.age >= 18 && person1.localStatus === 'resident') {
	console.log('Welcome, you may purchase:)');
} else {
	console.log('No, you are to young to drink alcohol!');
}

if (person2.age >= 18 && person2.localStatus === 'resident') {
	console.log('Welcome, you may purchase:)');
} else {
	console.log('No, you are to young to drink alcohol!');
}
