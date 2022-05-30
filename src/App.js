import "./App.css";
import Header from "./components/Header";
import Skills from "./components/Skills";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Career from "./components/Career";

function App() {
  const routes = [
    { path: "#about", name: "bio" },
    { path: "#career", name: "parcours" },
    { path: "#skills", name: "compétences" },
    { path: "#projects", name: "projets" },
    { path: "#contact", name: "contact" },
  ];
  return (
    <div id="about" className="App">
      <Header routes={routes} />
      <div className="content">
        <About />
        <Career />
        <Skills />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
