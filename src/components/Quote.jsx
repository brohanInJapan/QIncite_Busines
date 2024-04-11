/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
function Quote({ children }) {
  return (
    <section className="quote">
      <div className="container">
        <p className="quotemark">"</p>
        <p>{children}</p>
      </div>
    </section>
  );
}

export default Quote;
