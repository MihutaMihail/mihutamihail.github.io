import React from "react";

const Experience3 = () => {
  return (
    <div className="experience3">
      <div className="card mb-4">
        <div className="card-body">
          <a
            href="https://github.com/MihutaMihail/Unreal-v5.1_KingdomPanic"
            target="_blank"
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
            }}
          >
            <img src="https://github.com/fluidicon.png" width="40" />
          </a>
          <h2 id="experience-3-name" className="card-title language-dependent">
            Tower Defense
          </h2>
          <p className="card-text">
            <strong className="language-dependent" id="experience-3-title">
              Learning project
            </strong>
          </p>
          <p className="card-text">
            <strong id="experience-duration" className="language-dependent">
              Duration
            </strong>
            <br />
            <span id="experience-3-duration" className="language-dependent">
              October 2022 - May 2023
            </span>
          </p>
          <div className="card-text">
            <strong>Description</strong>
            <p id="experience-3-description" className="language-dependent">
              Creation of a Tower Defense game in Unreal Engine using
              blueprints. The objective is to protect the castle by placing
              towers to defeat enemies.
            </p>
            <strong id="experience-design" className="language-dependent">
              Design
            </strong>
          </div>
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
          <strong>Technologies</strong>
          <p>Unreal Engine Blueprint</p>
        </div>
      </div>
    </div>
  );
};

export default Experience3;
