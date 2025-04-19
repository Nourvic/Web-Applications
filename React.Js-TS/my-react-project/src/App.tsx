/*
import { useState } from 'react'
import SagHallo from "./Crash-Course/basic-types/sagHallo";
import Status from "./Crash-Course/basic-types/Status";
import { Heading } from "./Crash-Course/basic-types/Heading";
import { Layout } from "./Crash-Course/basic-types/Layout";
*/
import Button from "./Crash-Course/basic-types/Button";
import { Input } from "./Crash-Course/basic-types/Input";
import { Container } from "./Crash-Course/basic-types/Container";
import "./App.css";
function App() {
  // const [count, setCount] = useState(0)
  // <SagHallo name="Nour" age={26} loggedIn={false} />

  return (
    <>
      <div>
        <Button
          handleClick={(e, id) => {
            console.log(
              `Button Nr.${e.detail} ist erfolgreich implementiert und hat die ID ${id}`
            );
          }}
        />
        <br /> <br />
        <Input
          value="Click it Dammit"
          handleChange={(e) => console.log(e.target.value)}
        />
        <Container
          styles={{
            backgroundColor: "olive",
            border: "1px solid black",
            padding: "1rem",
            display: "grid",
            justifyContent: "right",
          }}
        />
      </div>
    </>
  );
}
export default App;
