interface Props {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
}
export default function Btn({ handleClick }: Props) {
  return (
    <div>
      <button onClick={(evnet) => handleClick(evnet, 1)}> Click Me</button>
    </div>
  );
}
