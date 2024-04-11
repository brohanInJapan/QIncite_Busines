/* eslint-disable react/prop-types */
import ContactFrom from "./ContactFrom";

function ContactArticle({ img }) {
  return (
    <section
      className="contact-article"
      style={{
        background: `linear-gradient(to top, rgba(56, 56, 66, 0.8), rgba(69, 70, 95, 0.4)),
        url(${img}) no-repeat center center`,
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
          <img
            src="../QIncite_Business/src/assets/QIncite_logo.png"
            alt="QIncite Business"
          />
        </div>
      </div>
    </section>
  );
}

export default ContactArticle;
