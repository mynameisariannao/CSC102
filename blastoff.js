function btrCountDownV1(){
    console.log("btrCountDownV1() started");
    var currTime = 50; //creates the repeating loop for timers
    for(var i = 0; i < 11; i++){ // creates a loop to be played
       setTimeout(function(){
        console.log(currTime);
        //display current countdown time with changes caused by admiral's change order 01Mar2022
        if(currTime == 0){
            //Makes 0 into blastoff
            document.getElementById("blastOffText").innerHTML = "Blastoff!";
        } else if(currTime < 25){ //makes blastoff appear when doing the warning
            document.getElementById("blastOffText").innerHTML = 
            "Warning Less than ½ way to launch, time left = " + currTime; 
        } else {
            document.getElementById("blastOffText").innerHTML = currTime; //presents Blastoff! within the page
        }
       currTime = currTime - 5;
       }, i * 5000);
    }
}