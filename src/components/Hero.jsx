/* eslint-disable react/prop-types */

function Hero({ children, img, element }) {
  return (
    <section
      className="hero"
      style={{
        background: `linear-gradient(to top, rgba(30, 43, 41, 0.50), rgba(30, 43, 41, 0.50)), bottom / contain no-repeat url(${element}), center / cover no-repeat url(${img}) `,
        backgroundBlendMode: "multiply",
      }}
    >
      <div className="container">
        <div className="content">{children}</div>
      </div>
    </section>
  );
}

export default Hero;
