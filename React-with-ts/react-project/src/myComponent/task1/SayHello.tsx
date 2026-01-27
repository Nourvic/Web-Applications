interface Props {
  name: string;
  age: number;
  loggidIn?: boolean;
}

type PropsObj = {
  objData: {
    fName: string;
    lName: string;
  };
};

type PropsNames = {
  firstName: string;
  lastName: string;
};
//                              props => {name ,age ,LoggedIn}
export default function SayHello(props: PropsNames) {
  return (
    <div>
      <h1>
        {" "}
        hey {props.firstName} {props.lastName}
      </h1>
    </div>
  );
}
