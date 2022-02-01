// ITERATION EXERCISES

// EXERCISE 1:

for(a = 100; a <= 200; a++){
    console.log(`a = ${a}`);
}


let a = 100;
while (a <= 200) {
  a++;
  console.log(`a = ${a}`);
}


// EXERCISE 2:

let a = 100;
while (a <= 200) {
  if (a % 2 == 0) {
    console.log("-");
  } else {
    console.log("*");
  }
  a++;
}

for(let a = 100; a <= 200; a++){
    if (a%2 == 0) {
        console.log("-");
    } else {
        console.log("*")
    }
}

// EXERCISE 3: Create a method that can print out the numbers 1-10 10 times each.

for (let i = 0; i < 10; i++) {
    for (let j = 1; j <= 10; j++) {
      console.log(j);
    }
 }  

// EXERCISE 4: I did as part of question 1, see top of this document

// EXERCISE 5: Write a switch statement which uses the current day as its expression and matches with the relevant case.
// Criteria:
// - Omit a break statement if it is a weekday, until the last day
// - Use a default case to handle an invalid range.

let now = new Date(); 
let day = now.getDay();
switch (day) {
  case 0:
    console.log(`It's Sunday`);
    break;
  case 6:
    console.log(`It's Saturday`);
    break;
  case 1:
    console.log(`It's Monday`);
  case 2:
  case 3:
  case 4:
  case 5:
    console.log(`It's a weekday`);
    break;
  default:
    console.log(`Excuse me?`);
    break;
}