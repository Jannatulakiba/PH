function isElevatorSafe(weights) {
  // Write your code here

  if( Array.isArray(weights) === false){
    return "Invalid";
  }
let sum = 0;
for (let value of weights){
  sum += value;
}

if( sum <= 400){
    return true ;
}
else {
    return false ;
}


}
console.log(isElevatorSafe([60 , 75 ,50]));
console.log(isElevatorSafe([90 , 100,95 , 120]));
console.log(isElevatorSafe([400]));
console.log(isElevatorSafe("60,75,50"));