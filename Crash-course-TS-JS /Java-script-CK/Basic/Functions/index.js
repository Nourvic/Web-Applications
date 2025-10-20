function printwelcome() {
  console.log("Hello \nWelcome \nHow Are you ?");
}
printwelcome();

function printwelcomeper(name) {
  console.log(`Hello ${name}`);
}
printwelcomeper("Nour");

function reverseArray(arr = []) {
  const x = [];
  for (elem of arr) {
    x.unshift(elem);
  }
  return x;
}
var myArray = [10, "Hello", 50, 70, true, false, "c"];
var y = reverseArray(myArray);
console.log(y);

function test() {
  console.log("Hi from x");
}

var x = test();

var y = function () {
  console.log("Hi from y");
};
y();

function callAnotherFunction(functionToCall) {
  console.log("getting ready to call another function");
  functionToCall();
}
//callAnotherFunction(y);
// OR
callAnotherFunction(function () {
  console.log("Hello from functionToCall");
});

// Arrow
var yx = () => console.log("test test test");
yx();

function test2(callBack) {
  callBack();
}
test2(() => console.log("Hello from Arrow"));

// Map
{
  var arr = [10, 20, 30, 40, 50];

  let myArr = arr.map(function (e) {
    return e * 10;
  });
  console.log(myArr);
}
// Filter
{
  let myArr2 = arr.filter((e) => {
    return e > 25 && e < 39;
  });
  console.log(myArr2);
}
// reduce
{
  let myArr3 = arr.reduce(function (prevValue, currentValue) {
    return prevValue + currentValue;
  });
  console.log(myArr3);
}
