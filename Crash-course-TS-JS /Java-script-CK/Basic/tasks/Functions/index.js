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
