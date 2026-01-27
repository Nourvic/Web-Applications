interface Props {
  arrData: {
    firstName: string;
    lastName: string;
  }[];
}
export default function SayHellotoArrays(props: Props) {
  return (
    <div>
      {props.arrData.map((event, index) => {
        return (
          <li key={index}>
            {event.firstName} {event.lastName}
          </li>
        );
      })}
    </div>
  );
}
