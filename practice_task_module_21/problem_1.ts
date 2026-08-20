function printUser(name:string,year:number){
  
    return `${name} is ${year} years old.`
}
// console.log(printUser("Amina",22));


// একটি product-এর নাম, price, এবং availability store করো primitive types use করে।
// Input:
// name = "Laptop"
// price = 45000
// isAvailable = true
// Output:
// Laptop cost 45000 and is available: true

function product (name : string, price:number,isAvailabe: boolean){
    return `${name} cost ${price} and is available: ${isAvailabe}`
}
// console.log(product("laptop",2400,true))

// Problem Statement:
// একটি array বানাও যেখানে student-এর নাম থাকবে এবং কতজন আছে সেটা কনসোল করবে।
// Input:
// ["Amina", "Rahim", "Karim", "Salma", "Rafi"]
// Output:
// Total student: 5
function student(name : string[] )  {
 
    
return name.length
}

// console.log(`total student: ${student(["Amina", "Rahim", "Karim", "Salma", "Rafi"])}`)

// Problem Statement:
// একটি tuple বানাও যেখানে একজন মানুষের নাম আর বয়স থাকবে।
// Input:
// ["Amina", 22]
// Output:
// Amina is 22 years old.
let person : [string,number]= ["amina",22]
// console.log(`${person[0]} is 22 years old`)

// Problem Statement:
// একটি user object বানাও যেখানে name required, কিন্তু email optional।
// Input:
// { name: "Amina" }
// Output:
// Name: Amina, Email: Not provided

let user : {name : string , email ? : string} = {
    name : "amina"
}
// console.log(`Name : ${user.name} , Email : ${user.email || "Not provided"}`)
// Problem Statement:
// একটি function লেখো যা একটি number নিয়ে check করবে সেটা even কি না।
// Input:
// isEven(8)
// Output:
// true
function numEven(isEven : number){
          return isEven % 2 === 0

   
}
// console.log(numEven(8))

// একটি function বানাও যা যেকোনো সংখ্যক number নিয়ে তাদের sum করবে।
// Input:
// sumAll(1, 2, 3, 4)
// Output:
// 10
function sumAll (...nums : number[]){
  let total = 0
   for(let num of nums){
     total = total + num
   }
   return total
}
// console.log(sumAll(1,2,3,4))

// Problem Statement:
// দুইটি array merge করো spread operator ব্যবহার করে।
// Input:
// [1, 2, 3]
// [4, 5, 6]
// Output:
// [1, 2, 3, 4, 5, 6]
let array1 : number[] = [1, 2, 3]
let array2 : number[] =  [4, 5, 6]
// console.log([...array1 , ...array2])

let num: number = 5;

let result = num > 0 ? "Positive" : "Negative";

// console.log(result);

let username : string | undefined = undefined ;
// console.log(username ?? "Guest")

let value: unknown = "Hello";

if (typeof value === "string") {
    // console.log(value);
}

// Problem Statement:
// একটি TypeScript program বানাও যেখানে একজন user-এর নাম, বয়স, email, skills, আর active status থাকবে। এরপর সব তথ্য print করবে।
// Input:
// {
//   name: "Amina",
//   age: 22,
//   email: "amina@email.com",
//   skills: ["HTML", "CSS", "TypeScript"],
//   active: true
// }
// Output:
// Name: Amina
// Age: 22
// Email: amina@email.com
// Skills: HTML, CSS, TypeScript
// Active: true
let user1 : {
      
  name: string,
  age: number,
  email: string,
  skills: string[],
  active:boolean

} = {

  name: "Amina",
  age: 22,
  email: "amina@email.com",
  skills: ["HTML", "CSS", "TypeScript"],
  active: true

};

console.log(`Name: ${user1.name}`);
console.log(`Age: ${user1.age}`);
console.log(`Email: ${user1.email}`);
console.log(`Skills: ${user1.skills.join(", ")}`);
console.log(`Active: ${user1.active}`);