let students = {
  firstName: "Nour",
  lastName: "Salim",
  age: 26,
  printFullName: function () {
    console.log(`Fullname is : ${this.firstName}, ${this.lastName}`);
  },
};
students.printFullName();
students.gpa = "3.0";
students.year = 2000;
console.log(students);