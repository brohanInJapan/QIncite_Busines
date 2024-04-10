const LinkList = [
  {
    id: "00",
    name: "home",
    text: "Home",
    url: ""
  },
  {
    id: "01",
    name: "about",
    text: "About Us",
    url: ""
  },
  {
    id: "03",
    name: "services",
    text: "Our Services",
    url: ""
  },
  {
    id: "04",
    name: "cta",
    text: "Get a Quote",
    url: ""
  },
]

function Header() {
  return (
    <div className="header">
      <div className="header-container">
        <img src="./QIncite_Busines/src/assets/QIncite_logo.png" alt="QIncite Business" />
        <nav></nav>
        <div className="social-nav"></div>
      </div>
    </div>
  );
}

export default Header;
