export interface Person {
  name: string;
  age?: number;
}
let y: Person;

y = {
  name: "",
  age: 25,
};

let test: Person = {
  name: "nour",
};

type myType = string | number;
type myType2 = {
  name: string;
  age: number;
};

let w: myType2 = {
  name: "nour",
  age: 25,
};

const myNumber1: number = y.age!;
const myNumber2: number = y.age ?? 0;

enum BookingStatus {
  initial = "initial",
  paid = "paid",
  cancelled = "cancelled",
}

let bookingStatus: BookingStatus = BookingStatus.initial;
bookingStatus = BookingStatus.paid;
bookingStatus = BookingStatus.cancelled;
