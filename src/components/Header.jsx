/* eslint-disable react/prop-types */
import Button from "./Button";

import Logo from "../assets/logo/Logo";
import TwitterIcon from "../assets/vectors/TwitterIcon";
import FacebookIcon from "../assets/vectors/FacebookIcon";
import LinkedInIcon from "../assets/vectors/LinkedInIcon";

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
    icon: <TwitterIcon />,
    url: "#X",
    size: "32px",
  },
  {
    id: "fb",
    icon: <FacebookIcon />,
    url: "#Facebook",
    size: "32px",
  },
  {
    id: "ln",
    icon: <LinkedInIcon />,
    url: "#LinkedIn",
    size: "32px",
  },
];

function Header() {
  return (
    <header className="header">
      <div className="container">
        <Logo className="logo" />
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
        <a href={smLink.url} key={smLink.id} className="social-links">
          {smLink.icon}
        </a>
      ))}
    </ul>
  );
}

export default Header;
