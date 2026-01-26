export default function Artikel({
  personName,
  email,
  date,
}: {
  personName: string;
  email: string;
  date: number;
}) {
  return (
    <div>
      <h1>{personName}</h1>
      <h3>{email}</h3>
      <h3>{date}</h3>
    </div>
  );
}
