import React from "react";

const Experience2 = () => {
  return (
    <div className="experience2">
      <div className="card mb-4">
        <div className="card-body">
          <a
            href="https://github.com/MihutaMihail/CSharp_API"
            target="_blank"
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
            }}
          >
            <img src="https://github.com/fluidicon.png" width="40" />
          </a>
          <h2 id="experience-2-name" className="card-title language-dependent">
            API
          </h2>
          <p className="card-text">
            <strong className="language-dependent" id="experience-2-title">
              Learning project
            </strong>
          </p>
          <p className="card-text">
            <strong id="experience-duration" className="language-dependent">
              Duration
            </strong>
            <br />
            <span id="experience-2-duration" className="language-dependent">
              21 November 2023 - 14 January 2024
            </span>
          </p>
          <div className="card-text">
            <strong>Description</strong>
            <p id="experience-2-description" className="language-dependent">
              Creation of an API to manage CRUD operations for users and their
              products
            </p>
            <strong id="experience-design" className="language-dependent">
              Design
            </strong>
          </div>
          <ol>
            <li id="experience-2-design-item-1" className="language-dependent">
              Controller design
            </li>
            <li id="experience-2-design-item-2" className="language-dependent">
              Service design
            </li>
            <li id="experience-2-design-item-3" className="language-dependent">
              Model design
            </li>
            <li id="experience-2-design-item-4" className="language-dependent">
              Data Access design
            </li>
            <li id="experience-2-design-item-5" className="language-dependent">
              Database design
            </li>
          </ol>
          <strong id="experience-methodology" className="language-dependent">
            Methodology
          </strong>
          <p
            id="experience-1-methodology-description"
            className="language-dependent"
          >
            Every week, we hold a project progress meeting with the team. We use
            Trello for organization and Discord for communication.
          </p>
          <strong>Technologies</strong>
          <p>C#, SQL</p>
        </div>
      </div>
    </div>
  );
};

export default Experience2;
