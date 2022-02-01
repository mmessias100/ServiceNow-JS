`use strict`;

// CONDITIONALS

// Truthy and Falsey

// FALSEY
//false
// 0
// ``
// undefined
// null
// NaN - not a number

// IF (ELSE IF and ELSE)
// check a condition -> run a code block if condition is met

let a = 2;

if(a == 0) {
    console.log(`sunshine!`);
} else if(a != 2) {
    console.log(`moonlight!`)
} else {
    console.log(`boogie!`)
}

// TERNARY IF

// short hand version of an IF ELSE statement

let x = 1;

if(x == 2){
    console.log(`x is 2`);
} else {
    console.log(`x is not 2`);
}

x == 2 ? console.log(`x is 2`) : console.log(`x is not 2`);

1 == `1` ? console.log(`true`) : console.log(`false`);

// strictly equal operator
// ===
// also checks data type

1 === `1` ? console.log(`true`) : console.log(`false`);

// EXERCISES 1 through to 5

let strictA = true;
let strictB = 1;

console.log(strictA == strictB);
console.log(strictA === strictB);

// exercise task 2

console.log(strictA != strictB);
console.log(strictA !== strictB);

// exercise task 3 - Creating IF statement that checks random age

let age = 27;

if(age >= 18 && age <= 65){
    console.log(`Age is in range`);
} else if (age < 18) {
    console.log(`Underage`);
} else {
    console.log(``);
}

// exercie task 4 - Using ternary-if syntax to check if age is above 50

let myAge = 27;

myAge >= 50 ? console.log(`true`) : console.log(`false`)