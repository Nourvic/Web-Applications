import { useState } from "react";

export default function MyInput() {
  const [MyInput, setMyInput] = useState("");
  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    console.log(setMyInput(event.target.value));
  }
  return (
    <div>
      <label> Your Name : </label>
      <input value={MyInput} onChange={handleInputChange} />
    </div>
  );
}
