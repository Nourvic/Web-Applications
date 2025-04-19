interface Props {
  status: "Loading" | "Success" | "Error";
}
function Status(props: Props) {
  let nachricht;

  if (props.status === "Loading") {
    nachricht = "Loading ..";
  } else if (props.status === "Success") {
    nachricht = "Data fetched";
  } else if (props.status === "Error") {
    nachricht = "Error fetching Data";
  } else {
    nachricht = "Reload ur Browser plz";
  }

  return (
    <div>
      <h2>Status - {nachricht}</h2>
    </div>
  );
}
export default Status;
