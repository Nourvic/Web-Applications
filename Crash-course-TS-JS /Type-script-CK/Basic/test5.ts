// Interface
interface UserInterface {
  readonly id: number;
  name: string;
  job?: string;
}
const user3: UserInterface = {
  id: 7,
  name: "test!!",
};
// user3.id=1000;   final

//Aufgabe
const add = (x: number, y: number): number => {
  return x + y;
};

interface addInterface {
  (x: number, y: number): number;
}
const add2: addInterface = (x: number, y: number): number => {
  return x + y;
};
