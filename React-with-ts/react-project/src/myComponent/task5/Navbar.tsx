export default function Navbar() {
  const links = [
    { title: "Home", url: "/" },
    { title: "About", url: "/about" },
    { title: "Contact", url: "/contact" },
    { title: "Blog", url: "/blog" },
  ];
  return (
    <div>
      <nav>
        <ul>
          {links.map((event, index) => {
            return (
              <li key={index}>
                {" "}
                <a href={event.url}>{event.title}</a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
