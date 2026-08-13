function bonusScore(scores) {
   if(!Array.isArray(scores) ||
   scores.length === 0 ||
   scores.some(score => typeof score !== "number"))
{
    return "Invalid"
}

return scores.map(score => score + 10)
             .reduce((total , score) => total + score , 0 )
}

console.log(bonusScore([80, 65, 90, 75]))
console.log(bonusScore([100]))
console.log(bonusScore([0, 10]))
console.log(bonusScore([]))
console.log(bonusScore("scores"))
console.log(bonusScore([80, "90", 70]))


