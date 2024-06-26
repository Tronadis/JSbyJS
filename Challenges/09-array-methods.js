// #### Create Students Array

// 1. setup students array with 5 students
//    {
//    id: 1,
//    name: 'peter',
//    score: 80,
//    favoriteSubject: 'math',
//    },

// #### Use Multiple Files

// - easer to manage code base (file, project)
// - order matters
// - other ways to achieve the same result (ES6 modules, fetch DB )
// - not limited to just static data

/*
		const students = [
			{
				id: 1,
				name: 'Peter',
				score: 80,
				favoriteSubject: 'math',
			},
			{
				id: 2,
				name: 'Sarah',
				score: 90,
				favoriteSubject: 'math',
			},
			{
				id: 3,
				name: 'Amadou',
				score: 85,
				favoriteSubject: 'history',
			},
			{
				id: 4,
				name: 'Poonam',
				score: 92,
				favoriteSubject: 'math',
			},
			{
				id: 5,
				name: 'Andrzei',
				score: 87,
				favoriteSubject: 'art',
			},
		]; */
// 'studients' array moved to data.js
// tests:
// console.log(students);
// sayName('John');

// #### updatedStudents

// 1. add role:'student' property to each object
//    using MAP method
// 2. assign to 'updatedStudents' variable and log

let updatedStudents = students.map(function (person) {
	return { ...person, role: 'student' };
	// This is also possible:
	/* person.role = 'student';
	return person; */
	// but it also modifies the original array.
});
// console.log(updatedStudents);
// console.log(students);

// #### highScores

// 1. filter array and return only scores >= 80
// 2. assign to 'highScores' variable and log

const highScores = students.filter(function (student) {
	return student.score >= 90;
	// alternative syntaxes:
	// if (student.score >= 90) return student;
	// or even:
	/* if (student.score >= 90) {
	 		return student;  // truthy
	 }; */
	// Longer, but prob better when part of more complex logic.
});
// console.log(highScores);

// #### specificId

// 1. find specific id in array
// 2. assign to 'specificId' variable and log

const specificId = students.find(function (theOne) {
	return theOne.id === 1;
});
// console.log(specificId);

// #### averageScore

// 1. sum up all student.score values with reduce
// 2. divide by the length of the students array
// 3. assign to 'averageScore' and log

const totalOfScores = students.reduce(function (acc, curr) {
	// console.log(`total: ${acc}`);
	// console.log(`current item: ${curr.score}`);
	acc += curr.score;
	return acc;
}, 0);
const averageScore = totalOfScores / students.length;
// console.log(`Number of students: ${students.length}`);
// console.log(`Total of scores: ${totalOfScores}`);
// console.log(`Average score: ${averageScore}`);

// Teacher's more compact formula (only one variable):
const averageScore2 =
	students.reduce(function (acc, curr) {
		// console.log(`total: ${acc}`);
		// console.log(`current item: ${curr.score}`);
		acc += curr.score;
		return acc;
	}, 0) / students.length;
// console.log(`Average score(2): ${averageScore2}`);

// #### survey

// 1. list favorite subjects with reduce
//    {
//    english: 1
//    history: 1
//    math: 3
//    }
// 2. assign to survey and log

const survey = students.reduce(
	function (acc, curr) {
		acc[curr['favoriteSubject']] = (acc[curr['favoriteSubject']] || 0) + 1;
		return acc;
	},
	{ math: 0, history: 0, art: 0 }
);
// console.log(survey);

// Teacher:
const survey2 = students.reduce(function (survey2, student) {
	const favSubject = student.favoriteSubject;
	if (survey2[favSubject]) {
		survey2[favSubject] = survey2[favSubject] + 1; // If already found, increment the value.
	} else {
		survey2[favSubject] = 1; // Else, create a new object property!
	}
	return survey2;
}, {});
// console.log(survey2);
