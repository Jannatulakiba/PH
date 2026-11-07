//Problem-01: Student Introduction Generator
function studentIntroduction(student) {
   if(typeof student !== "object" || student === null || 
    !("name" in student) ||
    !( "age" in student) ||
    !( "course" in student)) 

    {
        return "Invalid"
    }

    return `My name is ${student.name}. I am ${student.age} years old. I am learning ${student.course}.`
}

console.log(studentIntroduction({
    name:"Rafi",
    age:18,
    course:"JavaScript"
}))
console.log(studentIntroduction({}))

console.log(studentIntroduction("student"))

//Problem-02: Active User Filter
function filterActiveUsers(users) {
   if(!Array.isArray(users) || users.length === 0){
    return "Invalid"
   }

   for(let user of users){
    if((typeof user !== "object") || !("isActive" in user)){
        return "Invalid"
    }
   }

   return users.filter(user => user.isActive === true)
}
console.log(filterActiveUsers([{name:"A", isActive:true},
                               {name:"B", isActive:false}]))
console.log(filterActiveUsers([]))
console.log(filterActiveUsers([[{name:"A"}]]))
console.log(filterActiveUsers(["users"]))


//Problem-03: Trending Hashtag Counter
function countHashtags(caption) {
    if(typeof caption !== "string") return "Invalid"

    const tags = caption.split(" ").filter(word => word.startsWith("#"));
  const longestTag = tags.reduce((longest ,tag) => tag.length > longest.length ? tag : longest, "");


  return  { hashtagCount: tags.length, 
    longestTag: longestTag.slice (1)}
}



    console.log(countHashtags("Loving this weather today #sunny #vibes #weekend"))

    console.log(countHashtags("No hashtags here"))
    console.log(countHashtags("#ai #ml data science"))
console.log(countHashtags(123))
console.log(countHashtags(["#fun"]))

 

//Problem-04: Bonus Score Calculator
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




//Problem-05: Debugging Challenge - AI Leaderboard Generator
function generateLeaderboard(students) {
    if (!Array.isArray(students)) {
        return "Invalid";
    }

    if (students.length === 0) {
        return "Invalid";
    }

for(let student of students){
    if(typeof student !== "object" || student === null || 
    !("name" in student) ||
    !( "score" in student) ||
    typeof student.score !== "number")

    {
        return "Invalid"
    }

}


    const qualified = students.filter(student => 
        student.score >= 70);

    const names = qualified.map(({ name }) => 
        name.toUpperCase());

    return names.slice(0, 3);
}
console.log(generateLeaderboard ([
    {name:"Rafi",score:90},
    {name:"Sadia",score:65},
    {name:"Karim",score:85},
    {name:"Nafis",score:75}]))
console.log(generateLeaderboard ([{name:"A",score:70},{name:"B",score:71}]))
console.log(generateLeaderboard([]))
console.log(generateLeaderboard([{name:"Rafi"}]))
console.log(generateLeaderboard([{name:"Rafi",score:"90"}]))


