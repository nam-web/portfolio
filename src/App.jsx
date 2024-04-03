import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import AboutMe from "./components/aboutMe/AboutMe";
import Project from "./components/project/Project";
import Skills from "./components/skills/Skills";
import Contact from "./components/contact/Contact";
import "./app.scss";
import { useState } from "react";
import Menu from "./components/menu/Menu";

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro />
        <AboutMe />
        <Project />
        <Skills />
        <Contact />
      </div>
    </div>
  );
}

export default App;
