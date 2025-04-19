// type Assertion
let uid: any = 7;
let userId = <number>uid;
let userId2 = uid as number;

uid = true;

//function type

function sum(
  x: number,
  y: number
): number /* wert der Rueckgabe ist auch number */ {
  return x + y;
}

function sagHallo(name: string): string {
  return `Hallo ${name}`;
  return "Hallo" + name;
  // beide sind richtig
}
sagHallo("Nour");

function log(nachricht: string): void {
  console.log(nachricht);
}
log("Test!!");
