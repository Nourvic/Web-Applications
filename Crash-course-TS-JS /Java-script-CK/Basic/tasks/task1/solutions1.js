// Math-Operations >> add --> sub >> mult >> div >> mod

/*

function mathOperation(x, y) {
  return x + y;
}
console.log(mathOperation(3, 3));
*/

/*
var sum= num1 + num2
var sub= num1 - num2
var mal= num1 * num2
var div= num1 / num2
var mod = num1 % num2


var message = `First number is : ${num1 }
Second Number is ${num2}\n===========  
Sum is ${sum}
Sub is ${sub}
Mult is ${mal}
Div is ${div}
Mod is ${mod}
`
console.log(message)
*/

let num1 = parseFloat(prompt("Gib die erste Zahl ein : "));
let num2 = parseFloat(prompt("Gib die zweite Zahl ein : "));
//let num1
//let num2 = 5;
let add = (a, b) => a + b;
let sub = (a, b) => a - b;
let mal = (a, b) => a * b;
let div = (a, b) => a / b;
let mod = (a, b) => a % b;

var message = `First number is : ${num1}<br> =========== <br>
Second Number is ${num2}<br>
sum is ${add(num1, num2)}<br>
sub is ${sub(num1, num2)}<br>
mal is ${mal(num1, num2)}<br>
div is ${div(num1, num2)}<br>
mod is ${mod(num1, num2)}`;

console.log(message);

document.getElementById("result").innerHTML = message;
