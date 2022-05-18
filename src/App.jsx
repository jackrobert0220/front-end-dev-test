import "./app.scss";
import Welcome from "./components/welcome/Welcome";
import About from "./components/about/About";

function App() {
  return (
    <div className="app">
      <Welcome />
      <About />
    </div>
  );
}

export default App;
