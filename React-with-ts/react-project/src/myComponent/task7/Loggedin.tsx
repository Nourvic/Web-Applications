import { useState } from "react";

export default function Loggedin() {
  const [isloggedin, setIsloggedin] = useState<boolean>();
  const handleLogin = () => {
    setIsloggedin(true);
    console.log("Hey Nour");
  };
  const handleLogout = () => {
    setIsloggedin(false);
    console.log("Hey Guest");
  };
  return (
    <div>
      <button onClick={handleLogin}> Login</button>
      <button onClick={handleLogout}>Logout</button>
      <h2>user is {isloggedin ? "logged in" : "logged out"}</h2>
    </div>
  );
}
