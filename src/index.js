import React from 'react';
import ReactDOM from 'react-dom/client';
import { Header } from './portfolio/Header';
import Home from './portfolio/Home';
import About from './portfolio/About';
import { Projects } from './portfolio/Projects';
import Contact from './portfolio/Contact';
import { Footer } from './portfolio/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Home />
    <About />
    <Projects />
    <Contact />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
