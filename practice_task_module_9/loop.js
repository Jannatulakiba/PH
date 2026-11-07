
// Task 1
// for(let i =0; i < 5; i++){
//     console.log("Hello")
// }

// // Task 3 — Countdown with While Loop 
// // Write a while loop that prints numbers from 10 down to 1.

// let i = 10;
// while(i > 0){
//     console.log(i);
//     i--;
// }

// Task 5 — Even Numbers 
// Write a for loop that prints all even numbers between 1 and 30.


// for(let i = 2; i <=30 ; i=i+2 ){
  
//  console.log(i);
// }

// Task 6 — Sum of Numbers 
// Write a for loop that calculates the sum of numbers from 1 to 20 and prints the result.

// let sum = 0;
// for(let i = 0 ; i <= 20; i++){
//     sum = sum + i}
// } console.log(sum);

// Task 7 — Multiplication Table 
// Ask the user for a number (or set a variable), then print its multiplication table from 1 to 10 using a for loop. Example: if the number is 7 → 7 x 1 = 7, 7 x 2 = 14, ... 7 x 10 = 70.
// let num =7;
// for(let i = 0 ; i <= 20; i++){

//     console.log( num ,"X" , i ,'=' , i * 7);
    
// }

// Task 10 — Using Break 
// Write a for loop from 1 to 50 that stops completely (break) as soon as it reaches a number greater than 30.
for(let i = 0 ; i <= 50; i++){
    if(i > 30){
        break;
    }
    console.log(i);
}