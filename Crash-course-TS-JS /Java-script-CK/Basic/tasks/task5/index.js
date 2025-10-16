const input = document.getElementById("str-input");
const result = document.getElementById("result");
const btn = document.getElementById("btn-input");

const vowels = ["a", "e", "i", "o", "u"];

btn.addEventListener("click", function () {
  const text = input.value;
  let output = "";

  for (const char of text) {
    const lowerChar = char.toLowerCase();
    if (!vowels.includes(lowerChar)) {
      output += char;
    }
  }

  result.innerHTML = output;
  input.value = "";
});
