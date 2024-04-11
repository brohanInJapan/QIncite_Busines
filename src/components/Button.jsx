/* eslint-disable react/prop-types */
function Button({ children, value, onClick }) {
  return (
    <button className="button" value={value} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
