/*
export const sum: (x: number, y: number) => number = (x: number, y: number) => {
  return x + y;
};
*/
//Datentyp erstmal delcarieren und später kann festgestellt werde
// < T extends etwas > T -> darf nur etwas sein. es sei dann number oder string
// hiesst nichts anderes als number1 :number , number2 : number
export const sum = <T>(number1: T, number2: T) => {
  const y: T = number1;
  //return number1 + number2;
};
sum<number>(1, 10);
sum<string>("yes", "no");

export const identity = <T>(value: T): T => {
  return value;
};

export const identity2 = <T>(value2: T): T => value2;
