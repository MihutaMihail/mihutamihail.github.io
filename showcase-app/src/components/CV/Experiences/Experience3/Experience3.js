import React from "react";

const Experience3 = () => {
  return (
    <div className="experience3">
      <div className="card mb-4">
        {/* CARD HEADER */}
        <div className="card-header">
          <h2 id="experience-3-name" className="card-title language-dependent">
            Tower Defense
          </h2>
        </div>
        {/* END - CARD HEADER */}
        
        <div className="card-body">
          {/* GITHUB LINK */}
          <a
            className="github-icon"
            href="https://github.com/MihutaMihail/Unreal-v5.1_KingdomPanic"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://github.com/fluidicon.png"
              width="40"
              alt="github"
            />
          </a>
          {/* END - GITHUB LINK */}

          {/* TYPE OF PROJECT */}
          <p className="card-text">
            <strong
              className="type-project language-dependent"
              id="experience-3-title"
            >
              Learning project
            </strong>
          </p>
          {/* END - TYPE OF PROJECT */}

          {/* DURATION */}
          <p className="card-text">
            <strong id="experience-duration" className="language-dependent">
              Duration
            </strong>
            <br />
            <span id="experience-3-duration" className="language-dependent">
              October 2022 - May 2023
            </span>
          </p>
          {/* END - DURATION */}

          {/* DESCRIPTION */}
          <div className="card-text">
            <strong>Description</strong>
            <p id="experience-3-description" className="language-dependent">
              Creation of a Tower Defense game in Unreal Engine using
              blueprints. The objective is to protect the castle by placing
              towers to defeat enemies.
            </p>
            {/* END DESCRIPTION */}

            {/* DESIGN */}
            <strong id="experience-design" className="language-dependent">
              Design
            </strong>
          </div>

          {/* DESIGN - LIST OF ITEMS */}
          <ol>
            <li id="experience-3-design-item-1" className="language-dependent">
              Tower Firing Mechannics design
            </li>
            <li id="experience-3-design-item-2" className="language-dependent">
              Tower Placement System design
            </li>
            <li id="experience-3-design-item-3" className="language-dependent">
              Enemy Wave design
            </li>
            <li id="experience-3-design-item-4" className="language-dependent">
              Tower Upgrade design
            </li>
          </ol>
          {/* END DESIGN */}

          {/* METHODOLOGY */}
          <strong id="experience-methodology" className="language-dependent">
            Methodology
          </strong>
          <p
            id="experience-3-methodology-description"
            className="language-dependent"
          >
            Project updates every two weeks with the team, tracking progress via
            Discord. Additionally, maintaining a list of completed and pending
            tasks for better organization.
          </p>
          {/* END METHODOLOGY */}

          {/* TECHNOLOGIES */}
          <strong>Technologies</strong>
          <p>Unreal Engine Blueprint</p>
          {/* END TECHNOLOGIES */}
        </div>
      </div>
    </div>
  );
};

export default Experience3;
