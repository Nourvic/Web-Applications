interface Person {
  name: string;
  age: number;
}

const obj1 = {
  name: "test",
  age: 25,
};

const obj2: Person = {
  name: "NNN",
  age: 99,
};

const obj3: { name: string; age: number } = {
  name: "Nour",
  age: 26,
};

// obj1 hat einen festen, automatisch abgeleiteten Typ.
// Es sind nur die Eigenschaften name und age erlaubt.
// obj1.birthDate = "1990-01-01"; // ❌ nicht erlaubt

// Lösung: Objekt mit Index Signature definieren,
// um dynamische Properties zu erlauben
// { key: string -> Property-Name, value: any -> Property-Typ }

const obj4: { [key: string]: any } = {
  name: "Nour",
  age: 26,
};
obj4.birthDate = "1990-01-01";

interface Person2 {
  [key: string]: unknown;
  age: number;
}

const ob5: Person2 = {
  name: "testst",
  age: 20,
};
ob5.gdp = "3.0";
ob5.gdp = 2.0;

const xy = ob5.gdp;
if (typeof xy === "number") {
  console.log(x.toFixed(2));
}
