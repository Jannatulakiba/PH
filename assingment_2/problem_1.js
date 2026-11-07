function matchWinner(teamAGoals, teamBGoals) {
    // Write your code here...
 if(typeof teamAGoals !== "number"||typeof teamBGoals !== "number"){
        return "Invalid";
    }

    if(teamAGoals > teamBGoals){
        return "Team A Won";
    }
   else if(teamAGoals < teamBGoals){
        return "Team B Won";
    }
    
    else {
        return "Draw";
    }
   
}
console.log(matchWinner(2,1));
console.log(matchWinner(1,3));
console.log(matchWinner(2,2));
console.log(matchWinner("3",2));