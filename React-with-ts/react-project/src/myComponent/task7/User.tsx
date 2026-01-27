import { useState } from "react";

type UserType = {
  name: string;
  email: string;
};

export default function User() {
  const [user, setUser] = useState<UserType>({
    name: "",
    email: "",
  });
  const [Loggidin, isLoggedin] = useState<boolean>();
  return (
    <div>
      <button
        onClick={() => {
          (setUser({ name: "Nour", email: "test@gmail.com" }),
            isLoggedin(true));
        }}
      >
        Login
      </button>
      <button
        onClick={() => {
          (setUser({ name: "", email: "" }), isLoggedin(false));
        }}
      >
        Logout
      </button>
      <h2> User name is {user.name}</h2>
      <h3>User email is {user.email}</h3>
    </div>
  );
}
