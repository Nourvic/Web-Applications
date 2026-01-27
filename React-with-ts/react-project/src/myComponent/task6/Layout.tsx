interface Props {
  children: React.ReactNode;
}

export default function Layout(props: Props) {
  return (
    <div>
      <h1>Welcome Layout </h1>
      <p>{props.children}</p>
    </div>
  );
}
