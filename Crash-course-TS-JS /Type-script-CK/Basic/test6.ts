// Classes

class Person {
  id: number;
  name: string;
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}
const person1 = new Person(10, "Nour");
console.log(person1.id);
console.log(person1.name);

// Classes with Interface

interface classInterfaceses {
  id: number;
  name: string;
  regis(): string;
}

class Person2 implements classInterfaceses {
  id: number;
  name: string;
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
  regis() {
    return `Hallo ${this.name} du bist Online`;
  }
}
// Vererbung inherited
class Mitarbeiter extends Person2 {
  position: string;
  constructor(id: number, name: string, position: string) {
    super(id, name);
    this.position = position;
  }

  regis(){
    return `Hallo ${this.name}`;
  }
}

const per1 = new Person2(1, "Nour");
const mrb = new Mitarbeiter(2, "Nour", "web developer");

console.log(per1.id);
console.log(per1.name);
console.log(per1.regis());

console.log("#".repeat(10));

console.log(mrb.id);
console.log(mrb.name);
console.log(mrb.regis());
console.log(mrb.position);
