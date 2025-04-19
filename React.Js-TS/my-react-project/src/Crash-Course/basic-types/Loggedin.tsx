import { useState } from "react";

interface Props {}

export const Loggedin = (props: Props) => {
  const [IsLoggedIn, setLogIn] = useState(false);
  return (
    <div>
      <button>Login</button>
      <button>Logout</button>
      <h2>User </h2>
    </div>
  );
};
