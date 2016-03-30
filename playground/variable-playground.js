// var person = {
// 	name: 'Kim',
// 	age: 21
// };

// function updatePerson (obj) {
// 	// obj = {
// 	// 	name: 'Kim',
// 	// 	age: 46
// 	// };
// 	obj.age = 46;
// }

// updatePerson(person);
// console.log(person);

// Array example

var grades = [15, 37];

function addGrade(gradesArr) {

	// pushes on new value
	gradesArr.push(56);
	debugger;

	//does not get updated because a new values is assigned
	//gradesArr = [15, 37, 56];
}

addGrade(grades);
console.log(grades);