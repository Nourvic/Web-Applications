const bmi_rechner = (x1, x2) => x1 / Math.pow(x2, 2);
document.getElementById("submit-btn").addEventListener("click", function () {
  const gewicht = parseFloat(document.getElementById("weight-input").value);
  const groesse = parseFloat(document.getElementById("height-input").value);
  const bmiWert = bmi_rechner(gewicht, groesse);
  const bmi_r = parseFloat(bmiWert.toFixed(2));

  const bmi = document.getElementById("bmi");
  bmi.innerHTML = `Dein BMI lautet ${bmi_r}`;

  const bmi_c = document.getElementById("bmi-category");
  if (bmi_r < 18.5) {
    bmi_c.innerHTML = "Du bist Untergewicht";
  } else if (bmi_r < 25) {
    bmi_c.innerHTML = "Du bist Normalgewicht";
  } else if (bmi_r < 30) {
    bmi_c.innerHTML = "Du bist Übergewicht";
  } else {
    bmi_c.innerHTML = "Du bist Adipositas";
  }
});
