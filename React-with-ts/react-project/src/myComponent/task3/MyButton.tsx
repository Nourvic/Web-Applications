import { useState } from "react";

export default function MyButton() {
  /*
  console.log("render");
  const state = useState(name2);
  const value = state[0];
  console.log(value);
  const setValue = state[1];
*/
  const [name, setName] = useState("test");

  function buttonClicked() {
    /*
    if (name == "test") {
      setName("Nour");
    } else {
      setName("test");
    }
    */
    return setName(name == "test" ? "Nour" : "test");
  }
  return (
    <div>
      <button onClick={buttonClicked}> Click Me</button>
      <h3>{name}</h3>
    </div>
  );
}
