import "./Input.css";

interface Props {
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = (props: Props) => {
  return (
    <input
      type="text"
      className="input1"
      value={props.value}
      onChange={props.handleChange}
    />
  );
};
