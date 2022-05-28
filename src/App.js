import "./App.css";
import Header from "./components/Header";
import Skills from "./components/Skills";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const routes = [
    { path: "#about", name: "présentation" },
    { path: "#skills", name: "compétences" },
    { path: "#projects", name: "projets" },
    { path: "#contact", name: "contact" },
  ];
  return (
    <div id="about" className="App">
      <Header routes={routes} />
      <div className="content">
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
