import "./app.scss";
import Welcome from "./components/welcome/Welcome";
import About from "./components/about/About";
import Learn from "./components/learn/Learn";
import Quadrant from "./components/quadrant/Quadrant";

function App() {
  return (
    <div className="app">
      <Welcome />
      <About />
      <Learn />
      <Quadrant />
    </div>
  );
}

export default App;
