let text = "";
document.getElementById("btn-input").addEventListener("click", function () {
  text = document.getElementById("str-input").value;
  for (var char of text) {
    let lowerchar = char.toLowerCase();
    if (
      lowerchar != "a" &&
      lowerchar != "e" &&
      lowerchar != "i" &&
      lowerchar != "o" &&
      lowerchar != "u"
    ) {
      document.getElementById("result").innerHTML += char;
    } else {
      continue;
    }
  }
  // console.log(`Hello ${text}`);
  document.getElementById("str-input").value = "";
});
