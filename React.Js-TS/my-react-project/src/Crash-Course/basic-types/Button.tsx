import "./Button.css";

interface Props {
  handleClick: (e: React.MouseEvent<HTMLButtonElement>, id: number) => void;
}

function Button(props: Props) {
  return (
    <button className="button1" onClick={(e) => props.handleClick(e, 7)}>
      Click me
    </button>
  );
}
export default Button;
