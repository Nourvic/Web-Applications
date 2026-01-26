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
      <div>
        <Artikel personName={"Nour"} email={"test1@gmail.com"} date={1999} />
        <Artikel personName={"Roun"} email={"test2@gmail.com"} date={2000} />
        <Artikel personName={"ourn"} email={"test3@gmail.com"} date={2001} />
      </div>
    </>
  );
}

export default App;
