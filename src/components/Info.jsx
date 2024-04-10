/* eslint-disable react/prop-types */
function Info({ children, img, alt }) {
  return (
    <div className="info">
      <div className="container">
        <div className="info-element"></div>
        <img src={img} alt={alt} />
        <div className="content">{children}</div>
      </div>
    </div>
  );
}

export default Info;
