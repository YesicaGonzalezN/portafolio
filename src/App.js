import Nav from "./Components/Nav/Nav";
import "./App.css";
import Main from "./Components/Main/Main";
import About from "./Components/About/About";
import Experience from "./Components/Experience/Experience";
import Projects from "./Components/Projects/Projects";
import ContactMe from "./Components/ContactMe/ContactMe";
import Footer from "./Components/Footer/Footer";


function App() {
  return (
    <div className="App">
      <Nav />
      <Main />
      <About />
      <Experience />
      <Projects />
      <ContactMe />
      <Footer />
    </div>
  );
}

// eslint-disable-next-line no-restricted-globals
addEventListener('DOMContentLoaded', () => {
  const btnMenu = document.querySelector('.btn-menu')
  if (btnMenu) {
    btnMenu.addEventListener('click', () => {
      const menuItems = document.querySelector('.menu-items')
      menuItems.classList.toggle('show')
    })
  }
});

export default App;
