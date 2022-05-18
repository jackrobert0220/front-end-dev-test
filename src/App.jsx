import "./app.scss";
import Welcome from "./components/welcome/Welcome";
import About from "./components/about/About";
import Learn from "./components/learn/Learn";

function App() {
  return (
    <div className="app">
      <Welcome />
      <About />
      <Learn />
    </div>
  );
}

export default App;
