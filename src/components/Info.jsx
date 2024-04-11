/* eslint-disable react/prop-types */
function Info({ children, img, alt }) {
  return (
    <section className="info">
      <div className="container">
        <div className="info-element"></div>
        <img src={img} alt={alt} />
        <div className="content-block">{children}</div>
      </div>
    </section>
  );
}

export default Info;
