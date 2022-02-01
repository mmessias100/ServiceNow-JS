`use strict`;

//let let = 2;

// console.log("Hello World!")

// let text = `greetings to the world`;

// console.log(text);

// console.info(text);

// console.warn(text);

// console.error(text);

// console.log(`%c` + text, `color: black; background-color:white; font-size: 20px; padding: 10px;`);

// console.log(`%c` + text + ` ` + `%c` + text, ` background-color: grey; color:turquoise;`, `color:blue;`)

let firstName = "Morris"
let SecondName = "Messias"
let whereYouFrom = "Angola"
let starSign = "Taurus"

console.log("My first name is " + firstName);

console.log("My second name is " + SecondName);

console.info("I was born and raised in London, United Kingdom. But originally I'm from " + whereYouFrom);

console.log(starSign + " baby");

let faveCar = "Don't have one haha"
let actualFaveCar = "Audi"
let carModel = "Q3"

console.log("Unfortunately, I " + `%c` + faveCar,`color: yellow; font-style: italic; background-color: blue;padding: 2px`);
console.log("Actually my favourite car is " + actualFaveCar + " and the model is " + `%c` + carModel, `color: red; font-style: italic; background-color: grey;padding: 2px`);
console.log(`Yeah I can confirm, my favourite car is the ${actualFaveCar} and the model is ${carModel}`);