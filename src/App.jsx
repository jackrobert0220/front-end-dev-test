import "./app.scss";
import Welcome from "./components/welcome/Welcome";
import About from "./components/about/About";
import Learn from "./components/learn/Learn";
import Quadrant from "./components/quadrant/Quadrant";
import Scream from "./components/scream/Scream";
import Footer from "./components/footer/Footer";
import Ratings from "./components/ratings/Ratings";

function App() {
  return (
    <div className="app">
      <div className="content">
        <Welcome />
        <About />
        <Learn />
        <Quadrant />
        <Scream />
        <Ratings />
      </div>
      <Footer />
    </div>
  );
}

export default App;
