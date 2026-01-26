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
//import Artikel from "./myComponent/task2/artikel";
import MyButton from "./myComponent/task3/MyButton";
function App() {
  return (
    <>
      <div>
        <MyButton/>
      </div>
    </>
  );
}

export default App;

/*
  const tasks = [
    { id: 1, title: "doing my homework" },
    { id: 2, title: "Studying" },
    { id: 3, title: "reading a book" },
    { id: 4, title: "chaning my room " },
  ];

  const myTaskList = tasks.map((task) => {
    return <li key={task.id}>{task.title}</li>;
  });
  console.log(myTaskList);
*/
