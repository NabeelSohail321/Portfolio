import React, { useState, useEffect } from "react";
import Preloader from "./components/Pre";
import MainLayout from "./layouts/MainLayout";
import ScrollToTop from "./components/ScrollToTop";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";
import NeuralCursor from "./components/NeuralCursor";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <NeuralCursor />
      <div className="App relative" id={load ? "no-scroll" : "scroll"}>
        <div className="bg-mesh"></div>
        <ScrollToTop />
        <MainLayout>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Experience />
                <Contact />
              </>
            } />
          </Routes>
        </MainLayout>
      </div>
    </Router>
  );
}

export default App;
