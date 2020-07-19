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

function Uppercase(){
    if (name === name.toUpperCase()){
        alert ('THIS WAS TYPED INTO UPPERCASE');
        document.getElementById("requirementThree").innerHTML = `HELLO, ${name}!`;
    }else{
        alert ('This was typed using lowercase');
        document.getElementById("requirementThree").innerHTML = `Hello, ${name}!`;
    }
}

Uppercase();


//Requirement4


