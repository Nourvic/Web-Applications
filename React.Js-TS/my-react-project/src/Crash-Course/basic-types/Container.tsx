interface Props {
    styles:React.CSSProperties;
}

export const Container = (props: Props) => {
  return (
    <div style={props.styles}>Text hier</div>
  );
};
