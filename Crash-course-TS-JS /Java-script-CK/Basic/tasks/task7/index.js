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
for (student of students) {
  student.printFullName();
}
