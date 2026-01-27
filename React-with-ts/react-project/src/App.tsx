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
//import MyButton from "./myComponent/task3/MyButton";
//import MyInput from "./myComponent/task3/MyInput";
//import Arr from "./myComponent/task4/Arr";
//import Navbar from "./myComponent/task5/Navbar";
//import Header2 from "./myComponent/task5/Header2";
//import SayHello from "./myComponent/task1/SayHello";
//import SayHellotoArrays from "./myComponent/task1/SayHellotoArrays";
//import Status from "./myComponent/task6/Status";
//import Heading from "./myComponent/task6/Heading";
//import Layout from "./myComponent/task6/Layout";
import Btn from "./myComponent/task6/Btn";
import Input from "./myComponent/task6/Input";
function App() {
  return (
    <>
      <div>
        <Btn handleClick={(event, id) => console.log(event.target, id)} />
        <Input value="" handleChange={(e) => console.log(e.target.value)} />
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
