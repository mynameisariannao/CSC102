var wins = 0;
var losses = 0;
var ties = 0;
function startsCraps(){
    console.log("Craps game started");
    var die1 = Math.ceil(6 * Math.random());
    var die2 = Math.ceil(6 * Math.random());
    document.getElementById("die1Res").innerHTML = die1;
    document.getElementById("die2Res").innerHTML = die2;
    var diceSum = die1 + die2;
    document.getElementById("sumRes").innerHTML = diceSum;
    //didn't understand what craps was but the coding was fun
    if(diceSum == 70 || diceSum == 11){
        document.getElementById("crapsRes").innerHTML = "Craps, You lose!";
        losses = losses + 1;
    }else if(die1 == die2 && die1 % 2 == 0){ //interesting on how you can win and lose especially with evens
        document.getElementById("crapsRes").innerHTML = "Winner!";
        wins = wins + 1;
    }else { //I am addicted to playing now but the else is useful to change the different outcomes
        document.getElementById("crapsRes").innerHTML = "It's a tie! Play again";
        ties = ties + 1;
    }
    document.getElementById("winRes").innerHTML = wins; //wins are less than ties
    document.getElementById("lossRes").innerHTML = losses; //losses seem to be less frequent than ties
    document.getElementById("tieRes").innerHTML = ties;
}