import React, { useState } from "react";
import { Header } from "./Header";
import Home from "./Home";
import About from "./About";
import { Projects } from "./Projects";
import Contact from "./Contact";
import { Footer } from "./Footer";

function Root() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default Root;
