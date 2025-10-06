// in Console
var mystr = "Hello World";

console.log(mystr.toLowerCase());
console.log(`${mystr.toUpperCase()}`);
console.log(`${mystr.toUpperCase().replace("O", "n")}`);
console.log(
  `${mystr
    .toUpperCase()
    .replace("O", "n")
    .split(",")
    .reverse()
    .join("")} \n ${typeof this}`
);

/*
| Methode     | Typ            | Bedeutung             | Beispiel                          |
| ----------- | -------------- | --------------------- | --------------------------------- |
| `split("")` | String → Array | Zerlegt in Buchstaben | `"Hi".split("") → ["H","i"]`      |
| `reverse()` | Array → Array  | Dreht Reihenfolge um  | `["H","i"].reverse() → ["i","H"]` |
| `join("")`  | Array → String | Fügt wieder zu String | `["i","H"].join("") → "iH"`       |
*/

// as Html file

var str1 = document.getElementById("result2").innerHTML;
var str2 = `
0 » ${str1}<br>
1 » ${str1.toLowerCase()}<br>
2 » ${str1.toUpperCase()}<br>
3 » ${str1.toUpperCase().replace("T", "n")}<br>
4 » ${str1.toLowerCase().split("").reverse().join("")}`;
document.getElementById("result2").innerHTML = str2;

//Input
document.getElementById("submit-btn").addEventListener("click", function () {
var str4 = document.getElementById("str-input").value;
  var str5 = `
  0 » ${str4}<br>
  1 » ${str4.toLowerCase()}<br>
  2 » ${str4.toUpperCase()}<br>
  3 » ${str4.toUpperCase().replace("T", "n")}<br>
  4 » ${str4.toLowerCase().split("").reverse().join("")}`;
  document.getElementById("result").innerHTML = str5;
});
