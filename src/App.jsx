import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";

function App() {
  return (
    <>
      <Header />
      <Hero img={"src/assets/placeholder.jpg"}>
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
    </>
  );
}

export default App;
