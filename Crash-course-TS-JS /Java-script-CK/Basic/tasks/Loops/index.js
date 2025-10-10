var students = ["Nour", "Roun", "Ounr", "Unor"];
//document.getElementById("students").innerHTML = students;

// for-math
for (var i = 0; i <= 30; i++) {
  //  console.log(` 10 x ${i} = ${10 * i}`);
}

//for string
var nam = "Nour";
var test = "";
for (let i = 0; i < nam.length; i++) {
  test += nam[i] + " ";
}
console.log(test);
//for-advanced { for in }
for (var i in nam) {
  console.log(nam[i]);
}
// for of
for (var i of nam) {
  console.log(i);
}
