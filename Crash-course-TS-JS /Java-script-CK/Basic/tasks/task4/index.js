var names = [];

const btn = document
  .getElementById("btn-add")
  .addEventListener("click", function () {
    const add_item = document.getElementById("inp-item").value;
    if (add_item == null || add_item === "") return;
    else {
      names.push(add_item);
      document.getElementById("arr-items").innerHTML = names.join(", ");
      document.getElementById("inp-item").value = "";
    }
  });
const btn2 = document
  .getElementById("btn-del")
  .addEventListener("click", function () {
    names.pop();
    document.getElementById("arr-items").innerHTML = names.join(", ");
  });
