/* eslint-disable react/prop-types */
import Button from "./Button";

import logo from "../assets/QIncite_logo.png";
import x from "../assets/Twitter.png";
import fb from "../assets/Facebook.png";
import ln from "../assets/inkedIn.png";

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
    id: "x",
    name: "X",
    icon: { x },
    url: "#X",
  },
  {
    id: "fb",
    name: "Facebook",
    icon: { fb },
    url: "#Facebook",
  },
  {
    id: "ln",
    name: "LinkedIn",
    icon: { ln },
    url: "#LinkedIn",
  },
];

function Header() {
  return (
    <header className="header">
      <div className="container">
        <img src={logo} alt="QIncite Business" />
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
          <img src={smLink.icon[smLink.id]} alt={smLink.name} />
        </a>
      ))}
    </ul>
  );
}

export default Header;
