/*
export const sum: (x: number, y: number) => number = (x: number, y: number) => {
  return x + y;
};
*/
//Datentyp erstmal delcarieren und später kann festgestellt werde
// < T extends etwas > T -> darf nur etwas sein. es sei dann number oder string
// hiesst nichts anderes als number1 :number , number2 : number
export const sum = (number1, number2) => {
    const y = number1;
    //return number1 + number2;
};
sum(1, 10);
sum("yes", "no");
export const identity = (value) => {
    return value;
};
export const identity2 = (value2) => value2;
