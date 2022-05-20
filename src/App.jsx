import "./app.scss";
import Welcome from "./components/welcome/Welcome";
import About from "./components/about/About";
import Learn from "./components/learn/Learn";
import Quadrant from "./components/quadrant/Quadrant";
import Scream from "./components/scream/Scream";

function App() {
  return (
    <div className="app">
      <Welcome />
      <About />
      <Learn />
      <Quadrant />
      <Scream />
    </div>
  );
}

export default App;
