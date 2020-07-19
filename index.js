var name = prompt("Please enter your name")

//Requirement1

function Greet() {
    document.getElementById("requirementOne").innerHTML = `Hello, ${name}`;
}
Greet();


//Requirement2 (I put Bob, because NULL cannot occurs because of the Prompt)

function GreetIf() {
    if (name !== "Bob") {
        document.getElementById("requirementTwo").innerHTML =
            "Hello my friend";
    }
}
GreetIf();


//Requirement3

function Uppercase() {
    if (name === name.toUpperCase()) {
        alert('THIS WAS TYPED INTO UPPERCASE');
        document.getElementById("requirementThree").innerHTML = `HELLO, ${name}!`;
    } else {
        alert('This was typed using lowercase');
        document.getElementById("requirementThree").innerHTML = `Hello, ${name}!`;
    }
}

Uppercase();


//Requirement4

var SiblingsArray = [];

function Siblings() {
    for (var i = 0; i < 2; i++) {
        SiblingsArray.push(prompt('Enter the name of your sibling # ' + (i + 1)));
    }

    document.getElementById("requirementFour").innerHTML = 'Your siblings names are ' + SiblingsArray.join(' and ');
}

Siblings();

//Requirement5

var FriendsArray = [];

function FriendsList() {
    for (var i = 0; i < 3; i++) {
        FriendsArray.push(prompt('Enter the name of your best friend # ' + (i + 1)));
       
    }
    const last = FriendsArray[FriendsArray.length - 1];
    document.getElementById("requirementFive").innerHTML = 'Your friends names are ' + FriendsArray.join(',') + ' and ' + last;
}

FriendsList();



