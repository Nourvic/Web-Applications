/*
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
*/
import "./App.css";
//import "./myComponent/Fstep";
//import Fstep from "./myComponent/Fstep";
//import Header from "./myComponent/task1/Header";
//import Posts from "./myComponent/task1/Posts";
//import SideMenu from "./myComponent/task1/SideMenu";
import Artikel from "./myComponent/task2/artikel";
function App() {
  return (
    <>
      <div style={{ backgroundColor: "white", color: "black" }}>
        <Artikel personName={"Nour"} email={"test1@gmail.com"} date={1999}>
          <p> ich bin das erste Kind vom Artikel 1 </p>
        </Artikel>
        <Artikel personName={"ourn"} email={"test3@gmail.com"} date={2001}>
          <p>das ist das 2te Child</p>
        </Artikel>
      </div>
    </>
  );
}

export default App;
