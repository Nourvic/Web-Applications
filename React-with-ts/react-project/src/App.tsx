/*
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
*/
import "./App.css";
//import "./myComponent/Fstep";
//import Fstep from "./myComponent/Fstep";
import Header from "./myComponent/task1/Header";
import Posts from "./myComponent/task1/Posts";
import SideMenu from "./myComponent/task1/SideMenu";
function App() {
  return (
    <>
      <div>
        <Header />
        <div style={{ width: "100%" }}>
          <div style={{ display: "flex" }}>
            {/*Posts container */}
            <div style={{ width: "70%" }}>
              <Posts />
              <Posts />
              <Posts />
            </div>
            {/*Posts container */}

            {/*SideMenu container */}
            <div>
              <SideMenu />
            </div>
          </div>
          {/*SideMenu container */}
        </div>
      </div>
    </>
  );
}

export default App;
