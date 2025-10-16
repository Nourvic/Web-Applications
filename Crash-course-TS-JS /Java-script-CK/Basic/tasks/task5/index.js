let text = "";
document.getElementById("btn-input").addEventListener("click", function () {
  text = document.getElementById("str-input").value;
  const vowles = ["a", "e", "i", "o", "u"];
  for (var char of text) {
    let lowerchar = char.toLowerCase();
    if (!vowles.includes(lowerchar)) {
      document.getElementById("result").innerHTML += char;
    } else {
      continue;
    }
  }
  // console.log(`Hello ${text}`);
  document.getElementById("str-input").value = "";
});
