`use strict`;

// ? SCOPE
/* in JavaScript there are two MAIN types of scope
LOCAL AND GLOBAL
*/

// LOCAL SCOPE

// Function Scope
// variables declared inside a function
// cannot be accessed from outside the function

// if you try, it will produce a ReferenceError

function foo() {
    let bar = `Hello World!`;
}

foo();

//console.log(bar);

// Block Scope

// variables inside a block cannot be accessed outside the block
{
    let x = 1;
}

//console.log(x);

// unless you declare them as a VAR
// this is one reason we don't use VARs anymore

{
    var y = 2;
}

//console.log(y);


// ! GLOBAL SCOPE

// Automatically GLOBAL

// if we don't declare a variable but reference it

function globalVAR(){
    myVariable = `hello`;
}

globalVAR();
//console.log(myVariable);

// Standard Global

// declaring a variable outside of a block

let a = `a`;

console.log(a);

function b(){
    console.log(`inside a function I can still find '${a}'`)
}

b();

// EXERCISES

function submit() {
    let x = "foo";
    if (x == "foo") {
      let y = "boo";
    }
    console.log(x);
    console.log(y);
  }
  submit();