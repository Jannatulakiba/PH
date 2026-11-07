function calculateAiCost(tokensUsed) {
   if(typeof tokensUsed !== "number" || tokensUsed < 0){
    return "Invalid"
   }
if ( tokensUsed <= 500){
    return 0 ;
}
let cost =Math.floor(( tokensUsed - 500)/100)*5
return cost;

}
console.log(calculateAiCost(300));
console.log(calculateAiCost(500));
console.log(calculateAiCost(650));
console.log(calculateAiCost(1000));
console.log(calculateAiCost(-10));
console.log(calculateAiCost("500"));