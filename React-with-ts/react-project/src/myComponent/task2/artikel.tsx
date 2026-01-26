export default function Artikel({
  personName,
  email,
  date,
  children,
}: {
  personName: string;
  email: string;
  date: number;
  children?: React.ReactNode;
}) {
  return (
    <div style={{margin :"10px", boxShadow: "0px 10px 10px gray"}}>
      <h1>{personName}</h1>
      <h3>{email}</h3>
      <h3>{date}</h3>
      <hr />
      <p>{children}</p>
      <hr />
    </div>
  );
}
