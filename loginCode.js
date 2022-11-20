function checkCreds(){
    //getting data
    console.log("checkCreds() has started");
    var firstName = document.getElementById("fName").value;
    console.log("First Name: " + firstName);
    var lastName = document.getElementById("lName").value;
    console.log("Last Name: " + lastName);
    var badgeNum = document.getElementById("badgeID").value;
    console.log("The badge number is " + badgeNum);
    var fullName = firstName + " " + lastName;
    console.log("Full Name: " + fullName);
    

    //input validationfor the name
    var nameLength = fullName.length;
    console.log("The length of the fullName variable is " + nameLength);

    if(nameLength > 20 || nameLength < 3){
        document.getElementById("loginStatus").innerHTML = "Invalid Full Name! Please Try Again";
    } else if(badgeNum > 999){
        document.getElementById("loginStatus").innerHTML = "Invalid Badge Number. Please Try Again";
    }else {
        document.getElementById("loginStatus").innerHTML = "Access granted, Welcome " + fullName;
        alert("Access granted, Welcome " + fullName);
        location.replace("./UATSpacePage.html");
    }
}
