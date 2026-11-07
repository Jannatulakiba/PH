// Problem 1
// Problem statement: Declare a variable of type unknown holding a string. 
// Use it to assert it as a string and get its length. Repeat using angle-bracket syntax <string>.
// Input: let val: unknown = "Hello TypeScript";
// Output: 16 (length), printed twice — once via as string, once via <string>.


let valu: unknown = "Hello TypeScript";

// Using "as" syntax
// console.log((valu as string).length);

// // Using angle-bracket syntax
// console.log((<string>valu).length);


// Problem 2
// Problem statement: Declare a string | number union variable. Cast it safely to number and add 
// 10. Then write a double assertion (as unknown as) example and comment why it's risky.
// Input: let value: string | number = "100";
// Output: 110 (safe cast result); commented risky example, no runtime output required.


let value: string | number = "100";

// Safe conversion to number
const num = Number(value);

// console.log(num + 10); // 110

// Double assertion
const risky = value as unknown as number;

// Problem statement: Create a Product interface with title: string, price: number, inStock?: boolean. 
// Create two product objects — one with inStock, one without. Write a function that logs a 
// product's price.
// Input: { title: "Laptop", price: 55000 } and { title: "Mouse", price: 500, inStock: true }
// Output: 55000 and 500 printed by the function.

interface product {
    title: string;
    price: number;
    inStock?: boolean;
}

const productOne: product = {
    title: "Laptop",
    price: 55000
};

const productTwo: product = {
    title: "Mouse",
    price: 500,
    inStock: true
};

function showPrice(Product: product): void {
    console.log(Product.price, Product.title , Product.inStock);
}

showPrice(productOne); // 55000
showPrice(productTwo); // 500