
var num1 = prompt("Please enter a number")
var num1 = prompt("Please enter a second number")

function Add(num1, num2){
    if(num1 === '' || num2 === ''){
        return 0;
    }else{
        return num1 + num2
    }

}
Add();
console.log(Add())