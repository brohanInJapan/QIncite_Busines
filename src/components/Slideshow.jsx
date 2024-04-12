/* eslint-disable react/prop-types */
import { slides } from "../data/slideData.json";

function Slideshow() {
  const slidesData = slides;

  return (
    <section className="slideshow">
      {slidesData.map((slide) => (
        <Slide slide={slide} key={slide.alt} />
      ))}
    </section>
  );
}

function Slide({ slide }) {
  return (
    <div
      className="slide"
      style={{
        background: `linear-gradient(to top, rgba(247, 247, 247, 0.9), rgba(247, 247, 247, 0.9)), url(${slide.src}) no-repeat`,
        backgroundSize: `cover`,
        backgroundBlendMode: "hard-light",
      }}
    >
      <h2>What others say</h2>
      <p className="testimonial">{slide.testimonial}</p>
      <span className="testimonial-client">- {slide.client}</span>
    </div>
  );
}

export default Slideshow;
