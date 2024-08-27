import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-title">
          <h2>Introduction</h2>
        </div>

        <div className="row justify-content-center align-items-center">
          <div className="col-md-6 order-md-1">
            <div>
              <figure>
                <img
                  src="./img/profile.jpg"
                  alt="#"
                  className="img-fluid img-thumbnail rounded img-introduction"
                />
              </figure>
            </div>
          </div>

          <div className="col-md-6 order-md-2">
            <div className="text-wrap">
              <h2 id="looking-for" className="language-dependent">
                Looking for
              </h2>
              <p id="looking-for-message" className="language-dependent">
                I am looking for an apprenticeship in development, preferably in
                the video game sector, but I am open to other opportunities.
              </p>
              <p id="more-details" className="language-dependent">
                Here are more details:
              </p>
              <ul>
                <li id="contract" className="language-dependent">
                  Contract Type → 3-year apprenticeship contract
                </li>
                <li id="schedule" className="language-dependent">
                  Schedule → 2 weeks in the company, 1 week in training
                </li>
                <li id="specialization" className="language-dependent">
                  Specialization B3 (next year) → Développement
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
