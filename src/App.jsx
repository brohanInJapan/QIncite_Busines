import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Info from "./components/Info.jsx";
import Quote from "./components/Quote.jsx";
import Services from "./components/Services.jsx";

function App() {
  return (
    <>
      <Header />

      <Hero img={"src/assets/placeholder2.jpeg"}>
        <h1>
          Empower Orginizations with Innovative HR Strategies and Services
        </h1>
        <p>
          With a team of seasoned professionals, we bring years of industry
          expertise to help businesses thrive by optimizing their human capital
          potential and in turn improve your business objectives
        </p>
        <button>Contact us</button>
      </Hero>

      <Info img={"src/assets/placeholder.jpg"}>
        <p>About us</p>
        <h2>
          Empower Orginizations with Innovative HR Strategies and Services
        </h2>
        <p>
          With a team of seasoned professionals, we bring years of industry
          expertise to help businesses thrive by optimizing their human capital
          potential and in turn improve your business objectives
        </p>
        <button>Contact us</button>
      </Info>

      <Quote>
        TRANSFORMING POTENTIAL INTO PERFORMANCE: EMPOWERING BUSINESSES THROUGH
        STRATEGIC HR EXCELLENCE.
      </Quote>

      <Services />
    </>
  );
}

export default App;
