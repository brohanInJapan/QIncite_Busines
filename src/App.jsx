import Button from "./components/Button.jsx";
import ContactArticle from "./components/ContactArticle.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Info from "./components/Info.jsx";
import Quote from "./components/Quote.jsx";
import Services from "./components/Services.jsx";
import Slideshow from "./components/Slideshow.jsx";

import HeroShape from "./assets/vectors/Hero Shape.svg";
import hero from "./assets/images/Asset34.png";
import info from "./assets/images/Asset35.png";
import contact from "./assets/images/Asset22.png";

function App() {
  return (
    <>
      <Header />

      <Hero img={hero} element={HeroShape}>
        <h1>
          Empower Orginizations with Innovative HR Strategies and Services
        </h1>
        <p>
          With a team of seasoned professionals, we bring years of industry
          expertise to help businesses thrive by optimizing their human capital
          potential and in turn improve your business objectives
        </p>
        <Button>Contact us</Button>
      </Hero>

      <Info img={info}>
        <p>About us</p>
        <h2>Incite Business Consultants</h2>
        <p>
          Incite Business Consultants is a leading and innovative human
          resources company committed to empowering organizations with
          exceptional human resources’ strategies and services. With a team of
          seasoned professionals, we bring years of industry expertise to help
          businesses thrive by optimizing their human capital potential and in
          turn improve your business objectives.
        </p>
        <Button>Contact us</Button>
      </Info>

      <Quote>
        Transforming Potential into Performance: Empowering Businesses Through
        Strategic HR Ecxellence.
      </Quote>

      <Services />

      <ContactArticle img={contact} />

      <Slideshow />
      <Footer />
    </>
  );
}

export default App;
