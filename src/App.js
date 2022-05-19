import Nav from "./Components/Nav/Nav";
import "./App.css";
import Main from "./Components/Main/Main";
import About from "./Components/About/About";
import Experience from "./Components/Experience/Experience";
import Projects from "./Components/Projects/Projects";

function App() {
  return (
    <div className="App">
      <Nav />
      <Main />
      <About />
      <Experience />
      <Projects />
    </div>
  );
}

export default App;
