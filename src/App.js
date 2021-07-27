import { Container } from "react-bootstrap";
import Header from "./components/Header";
import SingleCard from "./components/SingleCard";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";

function App() {
  return (
    <>
      <Header />

      <Container className="app text-center">
        {/* INFO SECTION */}

        <section className="info mt-3">
          <h2 className="info-text-1">Mushoor Home Harvest</h2>
          <h5 className="info-text-2" style={{ fontSize: "17px" }}>
            Accessible & Affordable Nutrition
          </h5>
          <hr />
          <h3 style={{ color: "brown" }} className="my-2">
            <About />

            <hr style={{ maxWidth: "25%" }} />
          </h3>
        </section>

        {/* CARD SECTION */}

        <div className="card_container mb-5">
          <SingleCard />
        </div>
      </Container>

      <Footer />
    </>
  );
}

export default App;
