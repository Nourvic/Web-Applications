interface StatusProps {
  status: "loading" | "succsess" | "error";
}
export default function Status(props: StatusProps) {
  let message = "";
  if (props.status == "loading") {
    message = "loading...";
  } else if (props.status == "succsess") {
    message = "data fetched succesfully...";
  } else if (props.status == "error") {
    message = "error fetching data...";
  }
  return (
    <div>
      <h1> Status - {message}</h1>
    </div>
  );
}
