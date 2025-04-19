interface Props {
  name: string;
  age: number;
  loggedIn: boolean;
}

function SagHallo(props: Props) {
  return (
    <div>
      <h1> Hallo Web-Developers </h1>
      <h2>
        {props.loggedIn? "Ich bin " + props.name + " und " + props.age + "j.a": "Guess again"}
      </h2>
    </div>
  );
}
export default SagHallo;
