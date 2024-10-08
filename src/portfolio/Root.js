import React, { useState } from "react";
import { Header } from "./Header";
import Home from "./Home";
import About from "./About";
import { Projects } from "./Projects";
import Contact from "./Contact";
import { Footer } from "./Footer";
import Skills from "./Skills";
import './theme.css'

function Root() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className={theme === "light" ? "light-mode" : "dark-mode"}>
      <Header toggleTheme={toggleTheme} theme={theme} />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default Root;
