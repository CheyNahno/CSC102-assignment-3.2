function checkcode() {
    //input valuidation for week 3 
    console.log("checkCreds() started");
    document.getElementById("loginStatus").innerHTML = "Status of Login";
    var firstName;
    //names the variable first name 
    var lastName;
    //names the variable last name 
    var zipCode;
    //names the variable zipcode 
    var fullName;
    //names the variable full name 
    var fullNameLength;
    //lets computer know there is a variable full name length 

    //fill in variable 
    firstName = document.getElementById("fName").value;
    // the first name document will identify first name as an element idenifier to look out for 
    console.log("The first name was inputed as" + fistName);

    lastName = document.getElementById("lName").value;
    console.log("The last name was inputed as" + lastName);

    zipCode = document.getElementById("zipCode").value;
    console.log("The zipCode was inputed as" + zipCode);

    fullName = firstName + lastName;
    console.log("The Full name was inputed as" + fullName);

    fullNameLength = fullName.legnth;
    console.log("The Full name was inputed as" + fullNameLength + "characters.");

    zipCodeNumb = parseInt(zipcode);
    console.log("The zipCode number is " + zipCodeNumb);

    //things to check for..fullNameLength is less than 20 characters,
    // zipCode has only 5 digits 
    if (fullNameLength > 20) {
        document.getElementById("loginStatus").innerHTML = "Invalid full name";
        console.log("Invalid full name");
    } else if (zipCode.legnth != 5) {
        document.getElementById("loginStatus").innerHTML = "Invalid zipcode";
        console.log("Invalid zipcode");
    } else {
        alert("User credientals passed, welcome to the site," + fullName);
        console.log("Credientals passed");
    }
}

function checkPalin() {
    console.log("checkPalin() started");
    //record the string into a variable 
    var entStr;
    //variable names entstr 
    entStr = document.getElementById("palinInput").value;
    //this is what ties it to the html document must be super precise here 
    console.log("entStr is " + entStr);
    //lets computer know to look for enstr and do this 

    //take away any spaces 
    var entStrNoSpace;
    //makes a new variable that is named entstr with the added no space 
    entStrNoSpace = entStr.split(" ").join("");
    //this takes away the spaces and joins them together 
    console.log("entStr with no spaces is " + entStrNoSpace);
    //it will show that enstr with no space do this above 

    //create rev array var and rev string 
    var revStr;
    //variable named revStr which is reverse string 
    const revArray = [];
    //this is an array uses an object and puts eveything in it this is the reverse q
    var length = entStrNoSpace.legnth - 1;
    //takes the length of the space and it takes it away because we code with 0 
    console.log("string length is " + length);
    //show us the length of the character 

    //input into array and reverse it 
    //set up a loop 
    for (var i = length; i >= 0; i--) {
        revArray.push(entStrNoSpace[i]);
        //reverse it and puts the last letter and putting it on the begginning and w/ all the characters
    }

    // convert to a string from an array 
    revStr = revArray.join("");
    //join is a function but you dont need to put anything in it. 
    console.log("reverse is " + revStr);

    //compare rev to string 
    var equal = 0;
    //boolean that will indicat that it is either true or false 
    equal = (entStrNoSpace === revStr)
    //we want to compare these two stings, three is they are equal to each other and have the same code ie string 
    console.log("the ent and reverse being equal is: " + equal);

    //write to palindrome status 
    if (equal == true) {
        document.getElementById("palinStatus").innerHTML = entStr + "<b>is</b> a palindrome";
    } else {
        document.getElementById("palinStatus").innerHTML = entStr + "is <b>not</b> a palindrome";
    }


}