let student = {
  firstName: "Nour",
  lastName: "Salim",
  age: 26,
  printFullName: function () {
    console.log(`Fullname is : ${this.firstName}, ${this.lastName}`);
  },
};

//student.printFullName();
student.gpa = "3.0";
student.year = 2000;
//console.log(student);
// Object of objects

let students = [
  {
    firstName: "Nour",
    lastName: "Salim",
    age: 26,
    printFullName: function () {
      console.log(`Fullname is : ${this.firstName}, ${this.lastName}`);
    },
  },

  {
    firstName: "Roun",
    lastName: "test",
    age: 24,
    printFullName: function () {
      console.log(`Fullname is : ${this.firstName}, ${this.lastName}`);
    },
  },

  {
    firstName: "NRou",
    lastName: "tset",
    age: 25,
    printFullName: function () {
      console.log(`Fullname is : ${this.firstName}, ${this.lastName}`);
    },
  },
];
students[0].printFullName();
students[1].printFullName();
students[2].printFullName();

// Nasted Objects 
let person = {
  name: {
    firstName: "Nour",
    lastName: "Salim",
  },
  age: 26,
  year: "1999",

  courses: [{ name: "Math", credits: 5 }, {}],
};
