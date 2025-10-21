const table = document.getElementById("students");
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
    firstName: "Nrou",
    lastName: "tset",
    age: 25,
    printFullName: function () {
      console.log(`Fullname is : ${this.firstName}, ${this.lastName}`);
    },
  },
];
for (st of students) {
  let content = `<tr>
     <td> ${st.firstName}</td> 
     <td> ${st.lastName}</td> 
     <td> ${st.age}</td> 
    </tr>`;
  table.innerHTML += content;
}
