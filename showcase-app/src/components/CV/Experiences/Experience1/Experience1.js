import React from "react";

const Experience1 = () => {
  return (
    <div className="experience1">
      <div className="card mb-4">
        {/* CARD HEADER */}
        <div className="card-header">
          <h2 id="experience-1-name" className="card-title language-dependent">
            E-commerce
          </h2>
        </div>
        {/* END - CARD HEADER */}

        <div className="card-body">
          {/* GITHUB LINK */}
          <a
            className="github-icon"
            href="https://github.com/MihutaMihail/E-Commerce-PHP"
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
              id="experience-1-title"
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
            <span id="experience-1-duration" className="language-dependent">
              15 January 2024 - 16 February 2024
            </span>
          </p>
          {/* END - DURATION */}

          {/* DESCRIPTION */}
          <div className="card-text">
            <strong>Description</strong>
            <p id="experience-1-description" className="language-dependent">
              Creation of an e-commerce site where users can sell products.
            </p>
            {/* END DESCRIPTION */}

            {/* DESIGN */}
            <strong id="experience-design" className="language-dependent">
              Design
            </strong>
          </div>

          {/* DESIGN - LIST OF ITEMS */}
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
          {/* END DESIGN */}

          {/* METHODOLOGY */}
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
          {/* END METHODOLOGY */}

          {/* TECHNOLOGIES */}
          <strong>Technologies</strong>
          <p>SQL, PHP, HTML, CSS</p>
          {/* END TECHNOLOGIES */}
        </div>
      </div>
    </div>
  );
};


export default Experience1;
