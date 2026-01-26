let name = "Nour";
export default function MyButton() {
  return (
    <div>
      <button onClick={buttonClicked}> Click Me</button>
      <h3>{name}</h3>
    </div>
  );
}
function buttonClicked() {
  name = "asd";
}
