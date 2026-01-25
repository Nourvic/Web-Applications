import "./Fstep.css";

export default function Fstep() {
  return (
    <div>
      <h1 style={elmStyle}> Hey from React</h1>
      <h2 style={{ backgroundColor: "tan" }}>
        hi {person.name} , email : {person.email}
      </h2>
      <h3 style={person.name == "Nour" ? elmStyle : { backgroundColor: "slateblue" }}>
        Check Name
      </h3>
      <button className={"button"} onClick={sayHello}>
        Click Me
      </button>
    </div>
  );
}

const elmStyle = {
  backgroundColor: "red",
};

const sayHello = () => {
  alert(`hi ${person.name} what can i do for u today ?`);
};

const person = {
  name: "Nour",
  email: "test@gmail.com",
};
