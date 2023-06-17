// 1. create "score1", "score2", "score3" variables and assign values (0-100)
// 2. calculate total score and average score, and assign them to the variables.
// 3. log total score and average score
// 4. create "plates" variable and assign 20
// 5. create "people" variable and assign 7
// 6. calculate remaining plates and assign to the variable
// 7. add one to remaining plates
// 8. create message variable and display 'There are (your value goes here) plates available' - string concatenation
// 9. log message

const score1 = 20;
const score2 = 40;
const score3 = 60;
let totalScore = score1 + score2 + score3;
let averageScore = totalScore / 3;

console.log(totalScore);
console.log(averageScore);

let plates = 20;
const people = 7;
// plates = plates - people;
// Or, if we want to share all the plates among the people:
plates = plates % people;

console.log(plates);

plates = ++plates;

let message = 'There are ' + plates + ' plates available.';
console.log(message);
