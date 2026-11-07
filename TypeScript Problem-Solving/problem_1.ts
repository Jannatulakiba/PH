function getBatteryStatus(percentage: number): string {
    if (percentage <= 20){
        return "Low";
    }
    else if (percentage <= 50){
        return "Medium";
    }
    else if (percentage <= 90){
        return "High";
    }
    else {
        return "Full";
    }
}
console.log(getBatteryStatus(10))
console.log(getBatteryStatus(35))
console.log(getBatteryStatus(75))
console.log(getBatteryStatus(100))

interface Booking {
    name : string;
    guests: number;
    time : string}


function formatBookingConfirmation(booking: Booking): string{
    return `${booking.name}'s table for ${booking.guests} guests is confirmed at ${booking.time}.`;
}
console.log(formatBookingConfirmation(
    { name: "Aisha",
         guests: 4, 
         time: "7:00 PM" 
        })
    )


console.log( formatBookingConfirmation(
    {"name":"Rahim",
        "guests":2,
        "time":"8:30 PM"})
    )

    console.log(formatBookingConfirmation(
        {"name":"Mim",
        "guests":1,
        "time":"1:15 PM"})
    )

function calculateWeeklyTotal(expenses: number[]): number {
   return expenses.reduce((total , expenses)=> total + expenses , 0)
}

console.log(calculateWeeklyTotal([200,450,100]))
console.log(calculateWeeklyTotal([1000,250]))
console.log(calculateWeeklyTotal([]))
console.log(calculateWeeklyTotal([0,0,0]))
console.log(calculateWeeklyTotal([99]))




type Light = "red" | "yellow" | "green";
function getTrafficAction(light: Light): string {
    if(light === "red"){
        return "Stop";
    }
    else if (light === "yellow"){
        return "Slow Down";

    }
    else {
        return "Go";
    }
}
console.log(getTrafficAction("red"));
console.log(getTrafficAction("yellow"));
console.log(getTrafficAction("green"));


interface QuizSummary {
    total : number ;
    average : number ;
}
const getQuizSummary = (scores : number[]): QuizSummary => {
    const total = scores.reduce((sum, score) => sum + score, 0);
    if(scores.length === 0){
        return {
            total : 0,
            average: 0

        };
    }
    const average = total / scores.length;
    return {
        total : total ,
        average : average
    };
}
console.log(getQuizSummary([8,9,7,10]))
console.log(getQuizSummary([5,5]))
console.log(getQuizSummary([]))
console.log(getQuizSummary([10]))
console.log(getQuizSummary([0,0]))