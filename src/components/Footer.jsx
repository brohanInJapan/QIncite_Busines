/* eslint-disable react/prop-types */
import logo from "../assets/QIncite_logo.png";
import email from "../assets/Contact Email.png";
import number from "../assets/Contact Numer.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <img src={logo} alt="QIncite Business" />
        <div className="content">
          <div className="contact">
            <ContactInfo icon={email} alt={"info email address"}>
              info@qincite.mail
            </ContactInfo>

            <ContactInfo icon={number} alt={"contact number"}>
              071 234 5678
            </ContactInfo>
          </div>

          <p>
            Let us help you build a strong foundation for a successful,
            motivated, and engaged workforce. Contact us today to discuss how we
            can become your strategic HR partner
          </p>
        </div>
      </div>
    </footer>
  );
}

function ContactInfo({ children, icon, alt }) {
  return (
    <div className="contact-info">
      <img src={icon} alt={alt} width={"24px"} height={"24px"} />
      <span>{children}</span>
    </div>
  );
}

export default Footer;
