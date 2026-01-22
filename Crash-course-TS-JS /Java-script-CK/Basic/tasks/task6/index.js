var arr = [50, 50, 50, 50, 50];
/*
👉 reduce geht von links nach rechts durchs Array.
Was sind x und y?
x → Zwischenergebnis (Summe bis jetzt)
y → aktuelles Element aus dem Array
*/
// x+y , 0 -> 0 ist Startwert
function cumulativeAddition(array) {
  let myarr = array.reduce((x, y) => {
    return x+y
  },100);
  console.log(`Sum is :${myarr} and Elements of are ${array.length}`);
}
cumulativeAddition(arr);
