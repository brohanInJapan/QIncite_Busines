/* eslint-disable react/prop-types */
import HeroShape from "../assets/vectors/Hero Shape.svg";

function Hero({ children, img, element }) {
  return (
    <section
      className="hero"
      style={{
        background: `linear-gradient(to top, rgba(30, 43, 41, 0.50), rgba(30, 43, 41, 0.50)), bottom / contain no-repeat url(${HeroShape}), center / cover no-repeat url(${img}) `,
        backgroundBlendMode: "multiply",
      }}
    >
      {element ? <img src={element} alt="" className="element" /> : <></>}
      <div className="container">
        <div className="content">{children}</div>
      </div>
    </section>
  );
}

export default Hero;
