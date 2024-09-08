import React from "react";

const Experience4 = () => {
  return (
    <div className="experience4">
      <div className="card mb-4">
        {/* CARD HEADER */}
        <div className="card-header">
          <h2 id="experience-4-name" className="card-title language-dependent">
            CO2 Interface
          </h2>
        </div>
        {/* END - CARD HEADER*/}

        <div className="card-body">
          {/* TYPE OF PROJECT */}
          <p className="card-text">
            <strong
              className="type-project language-dependent"
              id="experience-4-title"
            >
              Internship
            </strong>
          </p>
          {/* END - TYPE OF PROJECT */}

          {/* DURATION */}
          <p className="card-text">
            <strong id="experience-duration" className="language-dependent">
              Duration
            </strong>
            <br />
            <span id="experience-4-duration" className="language-dependent">
              24 June 2024 - 9 August 2024
            </span>
          </p>
          {/* END - DURATION */}

          {/* DESCRIPTION */}
          <div className="card-text">
            <strong>Description</strong>
            <p id="experience-4-description" className="language-dependent">
              Creation of a web interface for a company called Consort Group.
              The goal is to have a functional interface to assist with CO2
              calculations.
            </p>
            {/* END DESCRIPTION */}

            {/* DESIGN */}
            <strong id="experience-design" className="language-dependent">
              Design
            </strong>
          </div>

          {/* DESIGN - LIST OF ITEMS */}
          <ol>
            <li id="experience-4-design-item-1" className="language-dependent">
              Design of the technological infrastructure
            </li>
            <li id="experience-4-design-item-2" className="language-dependent">
              Design of the interface with Figma
            </li>
          </ol>
          {/* END DESIGN */}

          {/* METHODOLOGY */}
          <strong id="experience-methodology" className="language-dependent">
            Methodology
          </strong>
          <p
            id="experience-4-methodology-description"
            className="language-dependent"
          >
            Project review twice a week (Wednesday and Friday) with the team.
          </p>
          {/* END - METHODOLOGY */}

          {/* TECHNOLOGIES */}
          <strong>Technologies</strong>
          <p>
            Python (w/ pandas, flask, jupyter notebook) <br></br>
            HTML, CSS (w/ bootstrap) <br></br>
            JS (w/ chart.js)
          </p>
          {/* END TECHNOLOGIES */}
        </div>
      </div>
    </div>
  );
};

export default Experience4;
