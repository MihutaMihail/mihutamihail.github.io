import React from "react";

const Experience4 = () => {
  return (
    <div className="experience4">
      <div className="card mb-4">
        <div className="card-body">
          <h2 id="experience-4-name" className="card-title language-dependent">
            Website Wordpress
          </h2>
          <p className="card-text">
            <strong className="language-dependent" id="experience-4-title">
              Internship
            </strong>
          </p>
          <p className="card-text">
            <strong id="experience-duration" className="language-dependent">
              Duration
            </strong>
            <br />
            <span id="experience-4-duration" className="language-dependent">
              April 2022 - May 2022
            </span>
          </p>
          <div className="card-text">
            <strong>Description</strong>
            <p id="experience-4-description" className="language-dependent">
              Creation of a website for an association called LesBaleries' using
              Wordpress. The goal is to have a functional website for its
              clients.
            </p>
            <strong id="experience-design" className="language-dependent">
              Design
            </strong>
          </div>
          <ol>
            <li id="experience-4-design-item-1" className="language-dependent">
              Database design
            </li>
            <li id="experience-4-design-item-2" className="language-dependent">
              Administrator Page Functionality design
            </li>
          </ol>
          <strong id="experience-methodology" className="language-dependent">
            Methodology
          </strong>
          <p
            id="experience-4-methodology-description"
            className="language-dependent"
          >
            We have adopted a collaborative team approach, working together
            every day of the week, Monday through Friday.
          </p>
          <strong>Technologies</strong>
          <p>PHP, SQL, Wordpress Extensions</p>
        </div>
      </div>
    </div>
  );
};

export default Experience4;
