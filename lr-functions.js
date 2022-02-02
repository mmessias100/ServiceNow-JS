`use strict`;

/* FUNCTIONS
- a block of code that does a thing!
- they are evokedor 'run' when something calls them
- DRY principles (Don't Repeat Yourself)
- they can take arguments
- are globally scoped
*/

function log(message){
    console.log(message);
}

log(`Hello World!`);

// ? RETURNS

// when a function reaches a return statement it stops

let hi = true;

function hello() {
    log(hi);
    return hi = false;
}

hello();

// VARIABLE RETURNS

function sum(a,b) {
    return a+b;
}

log(sum(14,21));

// ! ARROW FUNCTIONS

// function goodbye(message) {
//     console.log(message);
// }

// goodbye = (message) => {
//     return console.log(message);
// }

// goodbye = (message) => console.log(message);

goodbye = message => console.log(message);

goodbye(`bye now`);

// EXERCISE 1

function para(num1,num2) {
    return num1-num2;
} log(para(30,3));

// EXERCISE 2

function welcome(name, age, gender){
    return console.log(`My name is ${name}, i am ${age} years old and of gender ${gender}`);
} welcome("Morris Messias",27,"Male");


// EXERCISE 3

// function powerUp(n1, n2){
//     return Math.pow(n1,n2);
// } log(powerUp(3,3));

powerUp = (n1,n2) => Math.pow(n1,n2);

console.log(powerUp(3,3));