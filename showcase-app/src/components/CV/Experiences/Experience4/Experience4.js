import React from "react";

const Experience4 = () => {
  return (
    <div className="experience4">
      <div className="card mb-4">
      <div
          className="card-header"
          style={{
            backgroundColor: "#f5f5f5",
            padding: "15px",
          }}
        >
          <h2
            id="experience-4-name"
            className="card-title language-dependent"
            style={{ margin: 0 }}
          >
            CO2 Interface
          </h2>
        </div>
        <div className="card-body">
          <p className="card-text">
            <strong className="type-project language-dependent" id="experience-4-title">
              Internship
            </strong>
          </p>
          <p className="card-text">
            <strong id="experience-duration" className="language-dependent">
              Duration
            </strong>
            <br />
            <span id="experience-4-duration" className="language-dependent">
              24 June 2024 - 9 August 2024
            </span>
          </p>
          <div className="card-text">
            <strong>Description</strong>
            <p id="experience-4-description" className="language-dependent">
              Creation of a web interface for a company called Consort Group.
              The goal is to have a functional interface to assist with CO2
              calculations.
            </p>
            <strong id="experience-design" className="language-dependent">
              Design
            </strong>
          </div>
          <ol>
            <li id="experience-4-design-item-1" className="language-dependent">
              Design of the technological infrastructure
            </li>
            <li id="experience-4-design-item-2" className="language-dependent">
              Design of the interface with Figma
            </li>
          </ol>
          <strong id="experience-methodology" className="language-dependent">
            Methodology
          </strong>
          <p
            id="experience-4-methodology-description"
            className="language-dependent"
          >
            Project review twice a week (Wednesday and Friday) with the team.
          </p>
          <strong>Technologies</strong>
          <p>Python (w/ pandas, flask, jupyter notebook) <br></br>
          HTML, CSS (w/ bootstrap) <br></br>
          JS(w/ chart.js)</p>
        </div>
      </div>
    </div>
  );
};

export default Experience4;
