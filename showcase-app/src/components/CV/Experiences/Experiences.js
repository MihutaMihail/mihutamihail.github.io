import React from "react";
import "./Experiences.css";
import Experiences1 from "./Experience1/Experience1";
import Experiences2 from "./Experience2/Experience2";
import Experiences3 from "./Experience3/Experience3";
import Experiences4 from "./Experience4/Experience4";

const Experiences = () => {
  return (
    <div className="experiences">
      <section id="experiences">
        <div className="container">
          <div className="section-title">
            <h2 id="nav-experiences" className="language-dependent">
              Experiences
            </h2>
          </div>

          <div className="row">
            <Experiences1 />
            <Experiences4 />
            <Experiences3 />
            <Experiences2 />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experiences;
