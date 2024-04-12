import Button from "./Button";

/* eslint-disable react/prop-types */
const navList = [
  {
    id: "00",
    name: "home",
    text: "Home",
    url: "",
  },
  {
    id: "01",
    name: "about",
    text: "About Us",
    url: "",
  },
  {
    id: "03",
    name: "services",
    text: "Our Services",
    url: "",
  },
  {
    id: "04",
    name: "cta",
    text: "Get a Quote",
    url: "",
  },
];

const socialLinks = [
  {
    id: "sm00",
    name: "X",
    icon: "public/Twitter.png",
    url: "#X",
  },
  {
    id: "sm01",
    name: "Facebook",
    icon: "public/Facebook.png",
    url: "#Facebook",
  },
  {
    id: "sm02",
    name: "LinkedIn",
    icon: "public/inkedIn.png",
    url: "#LinkedIn",
  },
];

function Header() {
  return (
    <header className="header">
      <div className="container">
        <img src="public/QIncite_logo.png" alt="QIncite Business" />
        <Nav />
        <Social />
      </div>
    </header>
  );
}

function Nav() {
  const navLinks = navList;

  return (
    <ul>
      {navLinks.map((navLink) => (
        <NavLink navLink={navLink} key={navLink.id} />
      ))}
    </ul>
  );
}

function NavLink({ navLink }) {
  return <Button>{navLink.text}</Button>;
}

function Social() {
  const smLinks = socialLinks;

  return (
    <ul>
      {smLinks.map((smLink) => (
        <a href={smLink.url} key={smLink.id}>
          <img src={smLink.icon} alt={smLink.name} />
        </a>
      ))}
    </ul>
  );
}

export default Header;
