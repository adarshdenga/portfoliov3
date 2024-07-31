"use client";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import { ReactLenis } from "@studio-freight/react-lenis";
import { useEffect, useState } from "react";
import EntryAnimator from "./components/EntryAnimator";

function App() {
  const [entryAnimationFinished, setEntryAnimationFinished] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setEntryAnimationFinished(true);
    }, 3000);
  });

  return entryAnimationFinished ? (
    <ReactLenis root>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          {/* </div> */}
        </div>
      </Router>
    </ReactLenis>
  ) : (
    <EntryAnimator />
  );
}

export default App;
