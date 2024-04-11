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
    icon: "",
    url: "",
  },
  {
    id: "sm01",
    name: "Facebook",
    icon: "",
    url: "",
  },
  {
    id: "sm02",
    name: "LinkedIn",
    icon: "",
    url: "",
  },
];

function Header() {
  return (
    <section className="header">
      <div className="container">
        <img
          src="../QIncite_Business/src/assets/QIncite_logo.png"
          alt="QIncite Business"
        />
        <Nav />
        <Social />
      </div>
    </section>
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
        <img src={smLink.icon} alt={smLink.name} key={smLink.id} />
      ))}
    </ul>
  );
}

export default Header;
