/* eslint-disable react/prop-types */
import Logo from "../assets/logo/Logo.jsx";
import EmailIcon from "../assets/vectors/EmailIcon.jsx";
import PhoneIcon from "../assets/vectors/PhoneIcon.jsx";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <Logo />
        <div className="content">
          <div className="contact">
            <ContactInfo icon={<EmailIcon />} alt={"info email address"}>
              info@qincite.mail
            </ContactInfo>

            <ContactInfo icon={<PhoneIcon />} alt={"contact number"}>
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

function ContactInfo({ children, icon }) {
  return (
    <div className="contact-info">
      {icon}
      <span>{children}</span>
    </div>
  );
}

export default Footer;
