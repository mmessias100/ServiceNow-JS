// Tuesday challenge - JavaScript

// FizzBuzz program

for(let i = 0; i <= 100; i++){
    if(i%3 == 0){console.log(`${i} = "Fizz"`);} 
    else if (i%5 == 0){console.log(`${i} = "Buzz"`);} 
    else if (i%3==0 && i%5==0){console.log(`${i} = "FizzBuzz"`)} 
    else {console.log(`Sorry mate!`)}
}

// 99 Bottles of Beer

for (let b=0; b <= 99; b++){
    if (b < 1) {
        console.log(`No more bottles of beer on the wall, no more bottles of beer.\n
        Go to the store and buy some more, 99 bottles of beer on the wall.`);
    } else{
    console.log(`${b} bottles of beer on the wall, ${b} bottles of beer.\n
    Take one down and pass it around,${b-1} bottles of beer on the wall.`);
    }
}