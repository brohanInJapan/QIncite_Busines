/* eslint-disable react/prop-types */
function Hero({ children, img }) {
  return (
    <section
      className="hero"
      style={{
        background: `linear-gradient(to top, rgba(56, 56, 66, 0.8), rgba(69, 70, 95, 0.4)),
        url(${img}) no-repeat center center`,
      }}
    >
      <div className="container">
        <div className="content">{children}</div>
      </div>
    </section>
  );
}

export default Hero;
