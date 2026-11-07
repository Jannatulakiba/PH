// function describeDeclaration(keyword) {

//     if (keyword === "var") {
//         return "Can redeclare, can reassign";
//     }
//     else if (keyword === "let") {
//         return "Cannot redeclare, can reassign";
//     }
//     else if (keyword === "const") {
//         return "Cannot redeclare, cannot reassign";
//     }
//     else {
//         return "Invalid";
//     }

// }

// console.log(describeDeclaration("let"));
// console.log(describeDeclaration("const"));
// console.log(describeDeclaration("var"));
// console.log(describeDeclaration("int"));

// function bookTicket(movie , seats = 1 , pricePerSeat = 300){
//     let total = seats * pricePerSeat ;
//     return `${movie} : ${seats} seat (s) ,  total ${total}` 

// }
// console.log(bookTicket("Dune", 2, 450));


// function generateReceipt(customerName, items, total ){
//     if(!Array.isArray(items) || items.length === 0){
//         return "Invalid"
//     }
// return `Receipt for ${customerName} 
//             Item: ${items}
//             Total: ${total}
// `
// }
// console.log(generateReceipt("Rakib", ["Pen","Book"], 10));


// const calculateBMI = (weight,height) =>{
//     if( weight <= 0 || height <= 0){
//         return "Invalid"
//     }
//      const BMI = weight / (height * height)
      
//       return  BMI.toFixed(2) ;

// }
// console.log(calculateBMI(70, 1.75));


     let userObj = {
          user :" Sadia",
          age : 22,
          hobbies : ["reading","coding" ]
     }

 
 console.log(userObj.user , userObj.age, userObj.hobbies)