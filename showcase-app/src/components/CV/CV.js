import React from "react";
import "./CV.css";
import Experiences from "./Experiences/Experiences"
import Projects from "./Projects/Projects"
import Skills from "./Skills/Skills"

const CV = () => {
  return (
    <div className="cv">
      <Experiences />
      <Projects />
      <Skills />
    </div>
  );
};

export default CV;
