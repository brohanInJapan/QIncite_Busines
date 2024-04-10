/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
function Quote({ children }) {
  return (
    <div className="quote">
      <div className="container">
        <p className="quotemark">"</p>
        <p>{children}</p>
      </div>
    </div>
  );
}

export default Quote;
