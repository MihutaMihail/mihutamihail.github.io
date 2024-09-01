import React from "react";

const Experience1 = () => {
  return (
    <div className="experience1">
      <div className="card mb-4">
        <div
          className="card-header"
          style={{
            backgroundColor: "#f5f5f5",
            padding: "15px",
          }}
        >
          <h2
            id="experience-1-name"
            className="card-title language-dependent"
            style={{ margin: 0 }}
          >
            E-commerce
          </h2>
        </div>
        <div className="card-body">
          <a
            href="https://github.com/MihutaMihail/E-Commerce-PHP"
            target="_blank"
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
            }}
          >
            <img src="https://github.com/fluidicon.png" width="40" />
          </a>
          <p className="card-text">
            <strong className="type-project language-dependent" id="experience-1-title">
              Learning project
            </strong>
          </p>
          <p className="card-text">
            <strong id="experience-duration" className="language-dependent">
              Duration
            </strong>
            <br />
            <span id="experience-1-duration" className="language-dependent">
              15 January 2024 - 16 February 2024
            </span>
          </p>
          <div className="card-text">
            <strong>Description</strong>
            <p id="experience-1-description" className="language-dependent">
              Creation of an e-commerce site where users can sell products.
            </p>
            <strong id="experience-design" className="language-dependent">
              Design
            </strong>
          </div>
          <ol>
            <li id="experience-1-design-item-1" className="language-dependent">
              Design of the authentication system
            </li>
            <li id="experience-1-design-item-2" className="language-dependent">
              Design of user functionalities
            </li>
            <li id="experience-1-design-item-3" className="language-dependent">
              Design of the database
            </li>
            <li id="experience-1-design-item-4" className="language-dependent">
              Design of the MVC architecture
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
          <p>SQL, PHP, HTML, CSS</p>
        </div>
      </div>
    </div>
  );
};

export default Experience1;
