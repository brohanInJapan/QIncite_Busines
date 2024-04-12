/* eslint-disable react/prop-types */
import ContactFrom from "./ContactFrom";
import Logo from "../assets/logo/Logo.jsx";

function ContactArticle({ img }) {
  return (
    <section
      className="contact-article"
      style={{
        background: `linear-gradient(to top, rgba(30, 43, 41, 0.95), rgba(30, 43, 41, 0.95)), center / cover no-repeat url(${img}) `,
        backgroundBlendMode: "multiply",
      }}
    >
      <div className="container">
        <ContactFrom />
        <div className="content-block">
          <p>Have any Questions?</p>
          <h2>Get in Touch!</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            ab cumque repudiandae id libero quis porro placeat fugit.
            Consequuntur nesciunt, neque laudantium minus quia at unde tempora
            cumque itaque beatae illum nulla cum, distinctio perspiciatis
            eligendi quo. Nobis reiciendis iusto cumque maiores asperiores
            eveniet, ullam, aliquam libero soluta corporis vitae similique iste
            perferendis dolorem quis eius voluptas omnis temporibus doloremque
          </p>
          <Logo />
        </div>
      </div>
    </section>
  );
}

export default ContactArticle;
