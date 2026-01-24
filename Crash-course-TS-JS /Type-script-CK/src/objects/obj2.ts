interface Person {
  name: string;
  age: number;
  email: string;
}
// omit ist ein Utility Typ und erwartet 2 Parameter (Name of Field, Key)
interface PersonWithoutEmail extends Omit<Person, "email"> {}

const a: PersonWithoutEmail = {
  name: "aaa",
  age: 20,
  // -> Fehler  email: "abc@gmail.com",
};

interface PersonWithNameOnly extends Pick<Person, "name"> {}

const b: PersonWithNameOnly = {
  name: "bbbb",
  // Fehler ->    age:21,
};
