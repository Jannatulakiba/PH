// Task 13-2A: Hot, Cold, or Normal
// Problem Statement:
// Write a function checkTemperature that takes a temperature (in Celsius) and returns 
// "Hot" if it is 30 or above, "Cold" if it is 15 or below, and "Normal" otherwise.



// function checkTemperature(temperature) {
//     if (temperature >= 30) {
//         return "Hot";
//     }
//     else if (temperature <= 15) {
//         return "Cold";
//     }
//     else {
//         return "Normal";
//     }
// }

// console.log(checkTemperature(56));
// console.log(checkTemperature(20));

// Task 13-2B: Reverse a Number
// Problem Statement:
// Write a function reverseNumber that takes a positive whole number and 
// returns it with its digits reversed. (Hint: convert the number to a string first.)

// function reverseNumber(num){
//   let str = num.toString();
//   let result = "";
// for(let i = str.length-1 ; i >= 0; i--){
//  result = result + str[i];
// }
// return result;
// }
// console.log(reverseNumber(12345));
let str = "deed"
function reverseNum(str){

  let result = "";
for(let i = str.length-1 ; i >= 0; i--){
 result = result + str[i];
}
return result;

if(str === result){

   return true
}
else{
    return false
}
}

console.log(reverseNum(str));

// function reverseNumber(num){
//   let str = num.toString();
// let reversed= str.split("").reverse().join(" ")
// return Number(reversed);
// }
// console.log(reverseNumber(12345));


// Task 13-3A: Product of Digits
// Problem Statement:
// Write a function productOfDigits that takes a positive whole number and 
// returns the product of its individual digits.


// function productOfDigits(num) {
//   let str = num.toString();
// let result = 1;
//   // TODO: loop through each character, convert to number, and multiply
//   for(let i = 0; i < str.length; i++)
//  {
//      result = result * Number(str[i]);

//  }
//   return result;
// }
 
// console.log(productOfDigits(123));  // Expected: 6
// console.log(productOfDigits(4040)); // Expected: 0


// function productOfDigits(num) {
// let product = 1;
// for(let digit of num.toString()){
//      product *= Number(digit)
// }
// return product;


// }
 
// console.log(productOfDigits(123));  // Expected: 6
// console.log(productOfDigits(4040)); // Expected: 0





// Write a function getOddNumbers that takes a number n 
// and returns an array of all odd numbers from 1 to n (inclusive).
// function getOddNumbers(n) {
//   let odds = [];
//   // TODO: write your loop here
// for(let i = 1 ; i <= n ; i++){
//     if(i % 2 != 0){
//         odds.push(i);
//     }
// }
//   return odds;
// }
 
// console.log(getOddNumbers(10));
// // Expected: [1, 3, 5, 7, 9]

// Task 13-4A: Count Vowels
// Problem Statement:
// Write a function countVowels that takes a string and returns 
// how many vowels it contains. Assume the string only contains lowercase letters, no spaces.

// function countVowels(word){

// let vowels = "aeiou"

// let count = 0;
// for(let i = 0 ; i <= word.length ; i++){
//     if (vowels.includes (word[i])){
//     count++;
// }
// }

// return count
// }
// console.log(countVowels("javascripts"))