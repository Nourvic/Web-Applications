// Union

let pid: number | string | boolean = "5";
pid = true;

// enum

enum Richtungen {
  oben, //   wert = 0
  untem, //  wert = 1
  links, //  wert = 2
  rechts, // wert = 3
}
console.log(Richtungen.oben);

// Type

type User = {
  id: number;
  name: string;
};

// Objects
const user2: User = {  // type als Datentyp des Objekts festlegen
  id: 7,
  name: "Salim",
};
const user1: { id: number; name: string } = {
  id: 1,
  name: "Nour",
};
